import { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

type RandomGiphy = {
  images: {
    downsized: {
      url: string;
    };
  };
};

export default function RandomGiphy() {
  const [loadingGiphy, setLoadingGiphy] = useState(true);
  const [giphy, setGiphy] = useState<RandomGiphy | null>(null);
  
  useEffect(() => {
    const giphyApiKey = import.meta.env.VITE_GIPHY_API_KEY;
    const gf = new GiphyFetch(giphyApiKey);
    const fetchGiphy = async () => {
      try {
        const { data: gifs } = await gf.trending({ limit: 1 });
        const trendiestGiphy = gifs[0];
        setGiphy(trendiestGiphy);
      } catch (error) {
        console.log({ error });
      } finally {
        setLoadingGiphy(false);
      }
    };
    fetchGiphy();
  }, []);

  if (loadingGiphy) return <h1>Loading random giphy!</h1>;

  if (!giphy) return <h1>Oops! No giphy found!</h1>;

  return <img src={giphy.images.downsized.url} />;
}

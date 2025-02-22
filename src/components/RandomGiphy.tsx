import toast from "react-hot-toast";
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
      } catch {
        toast.error("Opps! Could not load any giphy!");
      } finally {
        setLoadingGiphy(false);
      }
    };
    fetchGiphy();
  }, []);

  if (loadingGiphy)
    return (
      <div className="flex items-center justify-center h-[432px] w-full">
        <h2>Loading random giphy!</h2>
      </div>
    );

  if (!giphy)
    return (
      <div className="flex items-center justify-center h-[432px] w-full">
        <h2>Oops! No giphy found! 😬</h2>
      </div>
    );

  return <img src={giphy.images.downsized.url} />;
}

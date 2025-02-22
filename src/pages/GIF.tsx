import { useNavigate } from "react-router";

import Button from "../components/Button";
import RandomGiphy from "../components/RandomGiphy";

export default function GIF() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/video");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-screen gap-4">
      <RandomGiphy />
      <Button name="Back to Video" onClick={handleGoBack} />
    </div>
  );
}

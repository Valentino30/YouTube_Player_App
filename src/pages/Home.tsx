import { useState } from "react";
import { useNavigate } from "react-router";

import Input from "../components/Input";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSave = () => {
    setValue("");
    navigate("/video", { state: { youtubeURL: value } });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Input type="text" value={value} placeholder="YouTube Video URL" onChange={(e) => setValue(e.target.value)} />
      <Button name="Save" onClick={handleSave} disabled={!value.trim()} />
    </div>
  );
}

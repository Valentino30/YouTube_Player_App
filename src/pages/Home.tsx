import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const handleSave = () => {
    alert(`Saved: ${value}`);
    setValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="text"
        value={value}
        placeholder="YouTube Video URL"
        onChange={(e) => setValue(e.target.value)}
        className="p-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-700 mb-4 bg-gray-800"
      />
      <button
        onClick={handleSave}
        disabled={!value.trim()}
        className="text-white font-medium rounded-lg shadow-md disabled:opacity-50"
      >
        Save
      </button>
    </div>
  );
}

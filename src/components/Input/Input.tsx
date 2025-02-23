import { ChangeEvent } from "react";

type InputProps = {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange, placeholder = "Type here", type = "text" }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-700 mb-4 bg-gray-800"
    />
  );
}

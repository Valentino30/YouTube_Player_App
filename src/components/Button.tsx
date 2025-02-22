type ButtonProps = {
  name: string;
  disabled: boolean;
  onClick: () => void;
};

export default function Button({ name, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-white font-medium rounded-lg shadow-md disabled:opacity-50"
    >
      {name}
    </button>
  );
}

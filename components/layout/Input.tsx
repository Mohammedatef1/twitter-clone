interface InpoutProps {
  placeolder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InpoutProps> = ({ placeolder, value, disabled, onChange, type }) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeolder}
      value={value}
      disabled={disabled}
      type={type}
      className="
      w-full
      text-white
      text-xl
      bg-black
      border-2
      border-neutral-800
      p-4
      transition
      rounded-md
      outline-none
      focus:border-sky-300
      focus:border-2
      disabled:bg-neutral-900
      disabled:opacity-70
      disabled:cursor-not-allowed
      "
    />
  );
};

export default Input;

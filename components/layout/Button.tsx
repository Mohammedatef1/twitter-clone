interface ButtonProps {
  label: string;
  fullWidth?: boolean;
  onClick: () => void;
  large?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, large, secondary, disabled, outline, fullWidth }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      disabled:opacity-70 
      disabled:cursor-not-allowed 
      rounded-full 
      font-semibold 
      transition 
      border-2 
      hover:opacity-80 
      ${large ? "text-lg" : "text-md"}
      ${large ? "px-5" : "px-4"}
      ${large ? "py-3" : "py-2"} 
      ${fullWidth ? "w-full" : "w-fit"} 
      ${secondary ? "bg-white" : "bg-sky-500"}
      ${secondary ? "text-black" : "text-white"}
      ${secondary ? "border-black" : "border-sky-500"}
      ${outline ? "bg-transparent" : ""}
      ${outline ? "border-white" : ""}
      ${outline ? "text-white" : ""}
      `}>
      {label}
    </button>
  );
};

export default Button;

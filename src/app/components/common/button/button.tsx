import { ButtonProps } from "../../../interfaces";
import "./button.scss";

const Button = ({
  type = "submit",
  text,
  disabled = true,
  className,
  size = "small",
  onClick,
}: ButtonProps) => {
  const buttonSize = size === "small" ? "button-small" : "button-large";
  return (
    <button
      type={type}
      className={`button ${className} ${buttonSize}`}
      onClick={onClick}
      disabled={!disabled}
    >
      {text}
    </button>
  );
};

export default Button;

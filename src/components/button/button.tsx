import React from "react";
import cs from "classnames";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isActive = false,
  disabled = false,
}) => {
  const baseStyles =
    "cursor-pointer rounded-full transition-colors flex items-center justify-center bg-neutral-900 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-lg h-10 sm:h-9 px-4 sm:px-5 sm:min-w-20";
  const disabledStyle =
    "dark:disabled:hover:bg-[#0000] dark:disabled:text-white/40 cursor-not-allowed";
  const activeStyle = "bg-teal-700";

  return (
    <button
      className={cs({
        [`${baseStyles}`]: true,
        [`${activeStyle}`]: isActive,
        [`${disabledStyle}`]: disabled,
      })}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

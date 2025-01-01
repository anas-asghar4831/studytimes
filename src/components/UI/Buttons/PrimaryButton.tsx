import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode; // Content inside the button
  onClick?: () => void; // Optional click handler
  className?: string; // Additional custom classes
  type?: "button" | "submit" | "reset"; // Button types
  isDisabled?: boolean; // Disabled state
  size?: "sm" | "base" | "lg"; // Size options
  fullWidth?: boolean; // Option for full-width button
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  isDisabled = false,
  size = "base",
  fullWidth = false,
}) => {
  const baseClasses =
    "rounded-full bg-primary text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:bg-primary-dark transition duration-300 ease-in-out";

  const sizeClasses: Record<typeof size, string> = {
    sm: "text-sm px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2",
    base: "text-base px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4",
    lg: "text-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5",
  };

  const widthClass = fullWidth ? "w-full" : "inline-block";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${
        sizeClasses[size]
      } ${widthClass} ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

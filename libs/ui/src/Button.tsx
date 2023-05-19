import { styled } from "./stitches.config";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button type="button" style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};

const StyledButton = styled("button", {
  backgroundColor: "green",
  color: "white",
});

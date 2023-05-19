import { Button, Stitches } from "ui";

export const metadata = {
  title: "Curio | Web",
};

export default function HomePage() {
  return (
    <div className="container">
      <Logo>Curio</Logo>
      <Button label="Test Button" />
      <p className="description">Built With </p>
    </div>
  );
}

const Logo = Stitches.styled("h1", {
  fontSize: "2rem",
});

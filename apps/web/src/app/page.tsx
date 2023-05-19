import { Button, Text } from "ui";

export const metadata = {
  title: "Curio | Web",
};

export default function HomePage() {
  return (
    <div className="container">
      <Text as="h1">Curio</Text>
      <Button label="Test Button" />
    </div>
  );
}

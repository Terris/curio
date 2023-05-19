import Head from "next/head";
import { Stitches } from "ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  Stitches.globalStyles();

  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: Stitches.getCssText() }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

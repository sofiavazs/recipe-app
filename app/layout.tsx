import type { Metadata } from "next";
import "@styles/globals.css";
import Home from "./page";

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Recipes for the modern chef",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="main">
          <div className="gradient" />
        </div>
        <Home />
      </body>
    </html>
  );
}

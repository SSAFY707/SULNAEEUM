import TopNav from "@/components/TopNav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      
      <TopNav />
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

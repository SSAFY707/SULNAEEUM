import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

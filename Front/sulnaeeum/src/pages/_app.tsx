import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar";
import TestNav from "../components/TestNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      {/* <NavBar /> */}
      <TestNav />
      <Component {...pageProps} />
    </>
  );
}

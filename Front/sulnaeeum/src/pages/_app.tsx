import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {

  function kakaoInit() { // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log('app 첫 시작과 동시에 실행')
    console.log(window.Kakao.isInitialized());
  }



  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}

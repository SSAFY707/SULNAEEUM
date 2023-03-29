import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "@/store";
import Script from "next/script";


declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {

  function kakaoInit() { // 페이지가 로드되면 실행
    console.log('앱 로드 및 카카오 초기화')
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }



  return (
    <>

      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <Provider store={store}>
        <ChakraProvider>
          <NavBar />
          <Component {...pageProps} />
          <Script
            src='https://developers.kakao.com/sdk/js/kakao.js'
            onLoad={kakaoInit}
          ></Script>
          <ToastContainer />
        </ChakraProvider>
      </Provider>
    </>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider} from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "@/store";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <Provider store={store}>
        <ChakraProvider>
          <NavBar />
          <Component {...pageProps} />
          <ToastContainer />
        </ChakraProvider>
      </Provider>
    </>
  );
}

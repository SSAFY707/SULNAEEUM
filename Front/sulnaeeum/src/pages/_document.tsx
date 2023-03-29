import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer`}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

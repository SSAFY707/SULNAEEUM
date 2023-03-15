import TopNav from '@/components/common/TopNav'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head><title>SULNAEEUM | 술내음</title></Head>
      <TopNav></TopNav>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

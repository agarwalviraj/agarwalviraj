import type { AppProps } from "next/app";
import Head from "next/head";
import MainContentProvider from "../store/MainStore";
import "../styles/global.scss";
import "swiper/css/bundle";
import "swiper/css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Viraj - Portfolio</title>
        <link rel="shortcut icon" href="/Logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
          rel="preconnect"
        />
      </Head>
      <MainContentProvider>
        <Component {...pageProps} />
      </MainContentProvider>
    </>
  );
}

export default MyApp;

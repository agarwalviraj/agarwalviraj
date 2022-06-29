import type { AppProps } from "next/app";
import Head from "next/head";
import MainContentProvider from "../store/MainStore";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Viraj - Portfolio</title>
        <link rel="shortcut icon" href="/Logo.ico" />
      </Head>
      <MainContentProvider>
        <Component {...pageProps} />
      </MainContentProvider>
    </>
  );
}

export default MyApp;

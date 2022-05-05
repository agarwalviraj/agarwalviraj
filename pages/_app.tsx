import type { AppProps } from "next/app";
import MainContentProvider from "../store/MainStore";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContentProvider>
      <Component {...pageProps} />
    </MainContentProvider>
  );
}

export default MyApp;

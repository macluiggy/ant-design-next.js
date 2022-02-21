import "../styles/globals.css";
import type { AppProps } from "next/app";
// import "../styles/class.css";
import "../styles/hello.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

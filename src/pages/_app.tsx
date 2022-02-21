import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
// import "../styles/class.css";
import "../styles/hello.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

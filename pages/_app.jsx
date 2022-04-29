import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
import "../styles/custom.scss";
import "../styles/styles.css";
import "../styles/styleslog.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

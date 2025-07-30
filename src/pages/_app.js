import ThemeProvider from "../providers/ThemeProvider";
import "../styles/globals.css";
import dynamic from "next/dynamic";

// Wrap MyApp with dynamic and ssr: false
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });

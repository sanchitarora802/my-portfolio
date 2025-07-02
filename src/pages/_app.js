import ThemeProvider from "../providers/ThemeProvider";
import "../styles/globals.css"; // Importing global styles

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${montserrat.className}
     bg-light
     `}
    >
      <Component {...pageProps} />
    </main>
  );
}

// font-mont (paste this code in main class name to activate)

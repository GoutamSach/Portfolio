import Head from "next/head";
import HomePage from "./components/Home/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Developed with Next.Js and Tailwind"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}

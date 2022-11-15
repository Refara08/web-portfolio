import Head from "next/head";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gema Refantero</title>
        <meta
          name="description"
          content="Gema Refantero's web front end developer portfolio"
        />
      </Head>
      <Hero />
    </>
  );
}

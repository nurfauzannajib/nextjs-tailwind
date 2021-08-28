import Head from "next/head";
import Benefit from "../components/Benefit";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Learn Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Benefit />
    </div>
  );
}

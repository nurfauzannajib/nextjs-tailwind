import Head from "next/head";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Support from "../components/Support";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Learn Next</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <Support />
      <Service />
      <Benefit />
      <Footer />
    </div>
  );
}

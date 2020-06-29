import Head from "next/head";

import index from "./index.module.css";
import HeaderNav from "../components/headerNav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hell of fame</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Hell of fame by Broken Frame" />
        <meta property="og:description" content="
          " />
        <meta property="og:image" content="https://helloffame.brokenframe.es/images/logoGame.png" />
        <meta property="og:url" content="https://helloffame.brokenframe.es" />
      </Head>
      <HeaderNav></HeaderNav>
      <section className={index.middle}>
        <img
          src="/images/game_logo.png"
          className={index.logo}
          alt="Page Logo"
        />
        <h1>COMING SOON</h1>

        <img
          src="/images/macarena.gif"
          className={index.macarena}
          alt="Page Logo"
        />
      </section>
      <div style={{ width: 1 + 'px', height: 1 + 'px' }}></div>
    </div>
  );
}

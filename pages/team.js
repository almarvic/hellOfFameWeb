import Head from "next/head";

import teamStyles from "./team.module.css";

import utilStyles from "../styles/utils.module.css";
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
      <div className={utilStyles.pageContainer}>
        <section className={teamStyles.container}>
          <h2>Our team</h2>
          <ul className={teamStyles.itemList}>
            <li className={teamStyles.item}>
              <img src="https://pbs.twimg.com/profile_images/1257001685467217920/NnXf7ax5_400x400.jpg" alt="" />
            </li>
            <li className={teamStyles.item}>
              <img src="/images/profile.jpg" alt="" />
            </li>
            <li className={teamStyles.item}>
              <img src="/images/profile.jpg" alt="" />
            </li>
            <li className={teamStyles.item}>
              <img src="/images/profile.jpg" alt="" />
            </li>
            <li className={teamStyles.item}>
              <img src="/images/profile.jpg" alt="" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

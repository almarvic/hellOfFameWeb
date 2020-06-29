import Head from "next/head";

import pressStyles from "./press.module.css";

import utilStyles from "../styles/utils.module.css";
import HeaderNav from "../components/headerNav";

const numbers = [...Array(6).keys()];


export default function Press({ pressData }) {

  console.log(111111, pressData)

  return (
    <div>
      <Head>
        <title>Hell of fame</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Hell of fame by Broken Frame" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://helloffame.brokenframe.es/images/logoGame.png" />
        <meta property="og:url" content="https://helloffame.brokenframe.es" />
      </Head>
      <HeaderNav></HeaderNav>
      <div className={utilStyles.pageContainer}>
        <header>
          <img src="/images/game_logo.png" className={pressStyles.logo} alt="Hell of fame" />
        </header>
        <main className={pressStyles.container}>
          <h3>
            Screenshots (
            <a href="/hell-of-fame-screenshots.zip" title="15.6 MB zip archive">hell-of-fame-screenshots.zip</a>)
          </h3>
          <ul className={pressStyles.imgList}>
            {
              numbers.map(el => {
                const padNUmber = "/screenshots/hof_scsh_" + el.toString().padStart(4, "0") + ".png";
                return <li>
                  <a href={padNUmber}>
                    <img src={padNUmber}></img>
                  </a>
                </li>
              })
            }
          </ul>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/info/press.json')
  const pressData = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pressData,
    }
  }
}

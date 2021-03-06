import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import Card from "../components/card/Card";
import Categories from "../components/categories/Categories";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boom Assigment Caner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Categories />
        <Card />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

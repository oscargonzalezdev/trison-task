import styles from "./Layout.module.css";
import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant</title>
        <meta
          name="description"
          content="Restaurant is a web application developed by Oscar Gonzalez as a solution for a technical test."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Milkshaker</title>
        <meta name="description" content="Your favourite milkshake rating app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.milkshakeLogo}>Milkshaker!</span>
        </h1>
      </main>




    </div>
  )
}

export default Home

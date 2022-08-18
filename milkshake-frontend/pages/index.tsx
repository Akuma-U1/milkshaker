import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import MilkHead from '../components/Head/Head'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <MilkHead title='Milkshaker' />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.milkshakeLogo}>Milkshaker!</span>
        </h1>
        <Link href={'/rate'}>
          <Button background={'#d7c2f2'} size='lg' _hover={{
            bg: '#b3f2c7'
          }} className={styles.main_button}>
            Rate a Shake!
          </Button>
        </Link>
      </main>
    </div>
  )
}

export default Home

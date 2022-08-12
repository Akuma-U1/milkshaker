import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Rate.module.css'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import MilkHead from '../components/Head/Head'

const Rate: NextPage = () => {
    return (
        <div className={`${styles.container}`}>
            <MilkHead title='Milkshaker' />
            <nav>
                <Navbar />
            </nav>
            <main className={styles.main}>

                <Link href={'/'}>
                    <Button background={'#d7c2f2'} size='lg' _hover={{
                        bg: '#b3f2c7'
                    }} className={styles.main_button}>Back to main</Button>
                </Link>
            </main>
        </div>
    )
}

export default Rate

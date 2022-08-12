import Head from "next/head";

interface HeadProps {
    title: string
}

const MilkHead = ({ title }: HeadProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Your favourite milkshake rating app!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MilkHead;
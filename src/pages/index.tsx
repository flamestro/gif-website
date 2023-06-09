import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const title = process.env.TITLE!
const gifHref = process.env.GIF_HREF!
export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
          <iframe src={gifHref} width={"300vw"} frameBorder="0"></iframe>
          <p><a href="https://giphy.com/">via GIPHY</a></p>
      </main>
    </>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {BrowserView} from 'react-device-detect'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tile Runner App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My coded stuff</h1>
      <Link href={`/wm/mastermind`}>
        <a>Word Mastermind</a>
      </Link>
      <Link href={`/wi/wordinfo`}>
        <a>Word Info</a>
      </Link>
      <BrowserView>
        <Link href={`/pb/PrisonBreak`}>
          <a>Prison Break (under construction)</a>
        </Link>
      </BrowserView>
    </div>
  )
}

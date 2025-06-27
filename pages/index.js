
import Head from 'next/head'
import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BvsB Telegram DApp</title>
      </Head>
      <main>
        <h1 className="title">Welcome to BvsB Telegram DApp</h1>
        <p className="description">Telegram interface for binary options</p>
      </main>
    </div>
  )
}

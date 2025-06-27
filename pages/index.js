
import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BvsB Telegram DApp</title>
      </Head>
      <div className="title">BvsB Telegram Bot</div>
      <div className="chart">[Candlestick Chart Placeholder]</div>
      <div className="button-row">
        <button className="up">UP</button>
        <button className="down">DOWN</button>
      </div>
    </div>
  )
}

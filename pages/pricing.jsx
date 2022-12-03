import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationHeader from './blocks/header-navigation'
import Pricingblock from './blocks/pricing-block'
import Footer2 from './blocks/footer-base-2'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextail Example</title>
        <meta name="description" content="Example template using Next JS + Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Navigation Header*/}
      <NavigationHeader />
        <div styles="container-sm">
            <Pricingblock />
        </div>
      <Footer2 />
   </div>  
  )
}

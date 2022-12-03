import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from 'tailwindcss/defaultTheme'
import NavigationHeader from './blocks/header-navigation'
import Footer from './blocks/footer-base'
import Hero from './blocks/hero'
import Features from './blocks/features-block'
import CTA1 from './blocks/cta-1'
import CTA2 from './blocks/cta-2'
import Hero2 from './blocks/hero-2'
import Footer2 from './blocks/footer-base-2'

export default function Company() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Company</title>
        <meta name="description" content="Example template using Next JS + Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Navigation Header*/}
      <NavigationHeader />
        <div styles="container-sm">
          <Hero2 />
        </div>
      <Footer2 />
   </div>  
  )
}
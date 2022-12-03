import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationHeader from './blocks/header-navigation'
import Footer2 from './blocks/footer-base-2'
import Contactform from './blocks/contact-from'


export default function Contact() {
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
          <Contactform/>
        </div>
      <Footer2 />  
   </div>  
  )
}

import Head from 'next/head'
import NavigationHeader from './blocks/header-navigation'
import Footer2 from './blocks/footer-base-2'
import Featureblock from './blocks/features-block'
import styles from '../styles/Home.module.css';

export default function Features() {
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
          <Featureblock />
        </div>
      <Footer2 />  
   </div>  
  )
}

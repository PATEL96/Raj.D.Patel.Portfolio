import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar'
import Hobbies from './Objects/Hobbies'
import Me from './Objects/Me'
import Qualifications from './Objects/Qualification'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <title>PATEL96</title>
        <meta name="PATEL96" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div>
          <h1>
            Home.Me();
          </h1>
          <div className={styles.Me}>
            <Me />
          </div>
        </div>
        <div>
          <h1>
            Home.Qualifications();
          </h1>
          <Qualifications />
        </div>
        <div>
          <h1>
            Home.Hobbies();
          </h1>
          <Hobbies />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/PATEL96"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maintained by{' '}
          <span className={styles.logo}>
            PATEL96
          </span>
        </a>
      </footer>
    </div>
  )
}

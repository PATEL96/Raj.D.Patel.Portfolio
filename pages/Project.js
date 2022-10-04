import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>PATEL96</title>
                <meta name="PATEL96" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <h1>
                    Project.Done();
                </h1>
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

import Link from "next/link";
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.Navbar}>
            <li className={styles.Links}>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className={styles.Links}>
                <Link href="/Project" >
                    Project
                </Link>
            </li>
            <li className={styles.Links}>
                <Link href="/Contact" >
                    Contact
                </Link>
            </li>
        </div>
    );
}
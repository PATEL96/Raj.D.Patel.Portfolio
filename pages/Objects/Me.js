import styles from '../../styles/Me.module.css';
import profile from '../Props/Profile2.jpeg'
import Image from 'next/image';

export default function Me() {
    return (
        <div className={styles.Container}>
            <Image src={profile} height={450} width={350} className={styles.Image} />
            <div className={styles.dataArea}>
                <div className={styles.Data}>
                    Raj D. Patel
                </div>
            </div>
        </div>
    );
}
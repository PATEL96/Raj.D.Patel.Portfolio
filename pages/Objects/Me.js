import styles from '../../styles/Me.module.css';
import profile from '../Props/Profile2.jpeg'
import Image from 'next/image';
import styled from 'styled-components'

export default function Me() {

    return (
        <Container>
            <Image src={profile} height={450} width={350} className={styles.Image} />
            <div className={styles.dataArea}>
                <div className={styles.Data1}>
                    Raj D. Patel
                </div>
                <div className={styles.Data2}>
                    Hi I'm Raj! I'm Really Fond of Learning New stuff
                </div>
                <div className={styles.Data2}>
                    I'm In 2nd Year of study <a href='http://utu.ac.in' target='_blank' rel="noopener noreferrer"> @U.T.U.</a>
                </div>
                <div className={styles.Data2}>
                    I Love helping the Community with my Skills.
                </div>
                <div className={styles.Data2}>
                    I've gain Proficiency in Languages like <br></br> C/C++, JAVA, JAVASCRIPT, Rust, ReactJS,<br></br> NextJS, NodeJS, SQL, Solidity.
                </div>
            </div>
        </Container >
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    background: #c7d2fe2e;
    border-radius: 8px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    margin-right: 100px;
    margin-left: 100px;
    background-clip: border-box;
`
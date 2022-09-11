import styles from '../../styles/Me.module.css';
import profile from '../Props/Profile2.jpeg'
import Image from 'next/image';
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Me() {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 250, friction: 100 } }));

    return (
        <Container onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))} onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{ transform: props.xys.interpolate(trans) }} >
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

const Container = styled(animated.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    background: #c7d2fe2e;
    border-radius: 10px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    margin-right: 100px;
    margin-left: 100px;
    background-clip: border-box;
`
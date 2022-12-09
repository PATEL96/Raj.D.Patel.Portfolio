import TypewriterComponent from "typewriter-effect";
import style from '../../styles/Qualification.module.css';
export default function Qualifications() {

    return (
        <div className={style.typing}>
            <TypewriterComponent options={{
                autoStart: true, loop: true, delay: 50, strings: [
                    "I'm Student.",
                    "I'm Web Developer.",
                    "I'm Blockchain Developer.",
                    "I'm Learnig Stuff."
                ]
            }} />
        </div>
    );
}
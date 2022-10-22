import TypewriterComponent from "typewriter-effect";
export default function Qualifications() {

    return (
        <div className="typing">
            <TypewriterComponent options={{
                autoStart: true, loop: true, delay: 50, strings: [
                    "I'm Student.",
                    "I'm Web Developer.",
                    "I'm Blockchain Developer."
                ]
            }} />
        </div>
    );
}
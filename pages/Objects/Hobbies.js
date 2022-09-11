import Slider from "react-slick";
import { List } from "../Props/List";
import styles from '../../styles/Hobbies.module.css'
import Image from "next/image";

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
};
export default function Hobbies() {
    return (
        <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                {List.Links.map((item, index) => {
                    return (
                        <div key={index} className={styles.Container}>
                            <Image src={item} height={400} width={300} alt="none"></Image>
                        </div>
                    );
                })}
            </Slider >
        </div >
    );
}
import Image from "next/image";
import styles from '../../styles/Hobbies.module.css'
import Slider from "react-slick/";
import { List } from "../Props/List";

export default function Hobbies() {

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3.33,
        centerMode: true,
        centerPadding: 0,
    };

    return (
        <div>
            <h3>
                Other than Coding I also like Anime, Manga, Web Series.
            </h3>
            <div>

                <h4>
                    Here are some Personal Recommendations.
                </h4>
                <div className={styles.Container}>
                    <Slider {...settings} className={styles.Slider}>
                        {List.Images.map((image, index) => (
                            <div>
                                <a className={styles.ImageContainer} href={List.Links[index]} target='_blank'>
                                    <Image src={image} alt='none' height={300} width={220} className={styles.Image} />
                                </a>
                                <div>
                                    {List.Names[index]}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
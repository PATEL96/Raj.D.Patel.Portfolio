import Image from "next/image";
import { useState } from "react";
import styles from '../../styles/Hobbies.module.css'
import Slider from "react-slick/";
import { List } from "../Props/List";

export default function Hobbies() {

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
    };

    return (
        <div>
            <h3>
                Other than Coding I also like Anime, Manga, Web Series.
            </h3>
            <div className={styles.Container}>
                <Slider {...settings} className={styles.Slider}>
                    {List.Links.map((image, index) => (
                        <div>
                            <div className={styles.ImageContainer}>
                                <Image src={image} alt='none' height={300} width={220} />
                            </div>
                            <div>
                                {List.Names[index]}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
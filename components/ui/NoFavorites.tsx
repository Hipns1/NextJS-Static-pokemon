import React, { FC } from 'react';
import styles from "../../styles/Favorites.module.scss";

interface Props {
    text: string
}

export const NoFavorites: FC<Props> = ({ text }) => {
    return (
        <div className={styles.fav_nocard__container}>
            <h1>{text}</h1>
            <img src="http://1.bp.blogspot.com/-fBRhv06zzvM/Uj_PUZkcY0I/AAAAAAAACTc/uexDvoP6pLM/s1600/Sad_Face_Pikachu_is_Sad_by_ChibiIlliterate1.png" />
        </div>
    )
}

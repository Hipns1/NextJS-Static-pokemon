import { useRouter } from "next/router";
import { FC } from "react";
import styles from "../../styles/Favorites.module.scss";

interface Props {
    id: number
}

export const CardFavorite: FC<Props> = ({ id }) => {

    const router = useRouter()
    const onClickCard = () => {
        router.push(`/pokemon/${id}`)
    }
    return (
        <div
            onClick={onClickCard}
            className={styles.fav_card__container}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={`${id}`}
            />
        </div>
    )
}

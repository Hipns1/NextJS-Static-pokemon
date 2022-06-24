import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import styles from "../../styles/Home.module.scss";

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()
    const onClickCard = () => {
        router.push(`/name/${pokemon.name}`)
    }

    return (
        <div
            className={styles.home_card}
            key={pokemon.id}
            onClick={() => onClickCard()}>
            <div>
                <div className={styles.home_card__head}>
                    <Image src={pokemon.img} width="100%" height={140} />
                </div>
                <div className={styles.home_card__text}>
                    <h2>{pokemon.name}</h2>
                    <h2>#{pokemon.id}</h2>
                </div>
            </div>
        </div>
    )
}

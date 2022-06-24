import { FC, useEffect, useState } from "react"
import { Pokemon } from "../../interfaces";
import styles from "../../styles/Details.module.scss";
import { localFavorites } from "../../utils";

interface Props {
    pokemon: Pokemon;
}

export const PokemonDetail: FC<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsFavorite(!isFavorite)
    }

    useEffect(() => {
        setIsFavorite(localFavorites.existFavorite(pokemon.id))
    }, [])




    return (
        <div className={styles.detail_container}>
            <section className={styles.details_image}>
                <img src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
                    alt={pokemon.name} />
            </section>

            <section className={styles.detail_text}>
                <div className={styles.detail_text__header}>
                    <h1>{pokemon.name}</h1>
                    {
                        isFavorite
                            ? <button
                                className={styles.detail_btn__delete}
                                onClick={handleFavorite}>
                                Eliminar de favoritos
                            </button>
                            : <button onClick={handleFavorite}>Agregar a favoritos</button>
                    }
                </div>
                <h2>#{pokemon.id}</h2>
                <div className={styles.detail_text__footer}>
                    <h2>Sprites:</h2>
                    <div className={styles.detail_text__sprites}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                        <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                    </div>
                </div>
            </section>
        </div>
    )
}

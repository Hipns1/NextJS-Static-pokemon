import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { CardFavorite } from '../../components/ui/CardFavorite';
import { localFavorites } from '../../utils';
import styles from "../../styles/Favorites.module.scss";

const FavoritePage = () => {

    const [favorites, setFavorite] = useState<number[]>([]);

    useEffect(() => {
        setFavorite(localFavorites.pokemons())
    }, [])

    return (
        <Layout title='Favorites'>
            <div className={styles.fav_container}>
                {
                    favorites.length === 0
                        ? <NoFavorites text={"No hay favoritos"} />
                        : favorites.map(id => (
                            <CardFavorite id={id} key={id} />
                        ))
                }
            </div>
        </Layout>
    )
}

export default FavoritePage

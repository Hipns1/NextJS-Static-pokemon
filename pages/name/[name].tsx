import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeAPI } from '../../api';
import { Layout } from '../../components/layouts';
import { PokemonDetail } from '../../components/pokemon';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokeByName: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title={pokemon?.name} >
            {pokemon
                ? <PokemonDetail pokemon={pokemon} />
                : null
            }
        </Layout>
    )
}
export default PokeByName;


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeAPI.get<PokemonListResponse>("/pokemon?limit=151")
    const pokeNames: string[] = data.results.map(pokemon => pokemon.name)

    return {
        paths: pokeNames.map(name => ({
            params: { name }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }
    const pokemon = await getPokemonInfo(name)

    if (!pokemon) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        }
    }
}
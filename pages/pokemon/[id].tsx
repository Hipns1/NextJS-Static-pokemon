import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeAPI } from '../../api';
import { Layout } from '../../components/layouts';
import { PokemonDetail } from '../../components/pokemon';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokePage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title={pokemon.name} >
            <PokemonDetail pokemon={pokemon} />
        </Layout>
    )
}
export default PokePage;


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemonsLenght = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        paths: pokemonsLenght.map((id) => ({
            params: { id }
        })),
        fallback: "blocking",
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }
    const pokemon = await getPokemonInfo(id);

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
        },
        revalidate: 86400,
    }
}
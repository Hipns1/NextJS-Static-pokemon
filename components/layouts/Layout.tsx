import Head from 'next/head';
import React, { FC } from 'react';
import { NavBar } from '../ui';

interface Props {
    title?: string,
    children: React.ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon app"}</title>
                <meta name="autor" content="Jesus Perez" />
                <meta name="descripcion" content={`Informacion sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, Pokemon, pokedex`} />
            </Head>

            {/* NavBar */}
            <NavBar />

            <main style={{ padding: "0px 20px", backgroundColor: "#000000" }}>
                {children}
            </main>
        </>
    )
}


import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";
import logo from "../../styles/Images/pika.png";
import Image from "next/image";

export const NavBar = () => {
    return (
        <>
            <div className={styles.nav_container}>
                <div className={styles.nav_logo}>
                    <Image
                        src={logo}
                        alt="logo"
                        width={"40px"}
                        height={"40px"}
                    />
                    <Link href={"/"}>
                        <h2>P<span>okémon</span></h2>
                    </Link>
                </div>

                <div className={styles.nav_items}>
                    <Link href={"/favorites"}>
                        <h2>Favoritos</h2>
                    </Link>
                </div>
            </div>
        </>
    )
}

import {NavbarItem} from "./NavbarItem";
import styles from "../styles/NavBar.module.css";

import {SocialsItem} from "./SocialbarItem";

import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const NavBar = ({pages , socials}) => {
    return (
        <nav className={styles.NavBar}>
            <div className={styles.NavBar__container}>
                <a href="/"><img src="/images/Avator1.png" alt=""/></a>
                <ul className={styles.NavBar__list}>
                    {pages.map((page) => (
                        <NavbarItem key={page.link} label={page.label} path={page.link}/>
                    ))}
                </ul>
                <ul className={styles.NavBar__list}>
                    {socials.map((page) => (
                        <NavbarItem key={page.link} label={page.label} path={page.link}/>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

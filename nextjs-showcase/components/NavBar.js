import {NavbarItem} from "./NavbarItem";
import styles from "./NavBar.module.css";

import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const NavBar = ({pages}) => {
    return (
        <div className={styles.NavBar}>


                    {pages.map((page) => (
                        <NavbarItem key={page.link} label={page.label} path={page.link}/>
                    ))}

        </div>
    );
}

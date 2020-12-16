import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const Header = ({ name, home}) => {
    return (
        <header className={styles.header}>
            {home ? (
                <>
                    <img
                        src="/images/Avator1.png"
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        {/*<a>*/}
                            <img
                                src="/images/Avator1.png"
                                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                alt={name}
                            />
                        {/*</a>*/}
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
    )
}
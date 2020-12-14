import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from "./Navbar";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const name = 'Bal'
export const siteTitle = 'Next.js Sample Website'

const pages = [
    {
        label:"home",
        link: "/"
    },
    {
        label:<FontAwesomeIcon icon={faTwitter}/>,
        link: "https://twitter.com/balhayre"
    },
    {
        label:<FontAwesomeIcon icon={faGithub}/>,
        link: "https://github.com/Bal2018"
    }, {
        label:<FontAwesomeIcon icon={faLinkedinIn}/>,
        link: "https://linkedin.com/in/baljinder-hayre-8344296a"
    }
];

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <NavBar pages={pages}/>

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
                            <a>
                                <img
                                    src="/images/Avator1.png"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
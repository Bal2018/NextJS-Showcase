import styles from '../styles/Layout.module.css'
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Header} from "./Header";
import {ContentBackBtn} from "./ContentBackBtn";
import Head from "next/head";
import {NavBar} from "./NavBar";
import {Socials} from "./Socials";

const name = 'Baljinder Hayre'
export const siteTitle = "Bal's NextJS Website"

const pageLinks = [
    {
        label:"Blog",
        link: "/blog"
    },
    {
        label:"About",
        link: "/posts/intropage"
    }
];
const socialLinks = [
    {
        label:<FontAwesomeIcon icon={faTwitter}/>,
        link: "https://twitter.com/balhayre"
    },
    {
        label:<FontAwesomeIcon icon={faGithub}/>,
        link: "https://github.com/Bal2018"
    }, {
        label:<FontAwesomeIcon icon={faLinkedinIn}/>,
        link: "https://linkedin.com/in/baljinder-hayre"
    }
];


export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>

            <Head>
                <title>{siteTitle}</title>
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
                {/*<meta name="twitter:card" content="summary_large_image" />*/}
            </Head>

            <Header name={name} home={Boolean(home)}/>
            <NavBar pages={pageLinks} socials={socialLinks}/>

            <main>
                {children}
            </main>
            <ContentBackBtn home={Boolean(home)}/>
            {/*<Socials pages={SocialLinks}/>*/}

        </div>
    )
}
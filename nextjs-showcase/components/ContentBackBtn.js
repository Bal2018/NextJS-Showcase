import Link from "next/link";
import styles from '../styles/Layout.module.css'

export const ContentBackBtn = ({ home }) => {
    if (!home){
        return (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )
    }
    return null;
}
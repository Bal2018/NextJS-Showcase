import Link from 'next/link'
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
    return (
        <Layout home>
            <section className={utilStyles.headingMd}>
                <p>This is a small project with a few linked pages. </p>
            </section>
        </Layout>
    )
}
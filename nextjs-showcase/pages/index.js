import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <section className={utilStyles.headingMd}>
                <p>This is a small project with a few linked pages.
                    The contents may but be all there but the sketeton for linking pages is </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
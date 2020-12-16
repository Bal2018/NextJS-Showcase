import Layout, { siteTitle } from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'
import Link from "next/link";
import Date from "../../components/date";
import {getSortedPostsData} from "../../lib/posts";

export default function Blog({ allPostsData }) {
    return (
        <Layout blog>

            {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, pinned }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />

                            <small className={utilStyles.lightText}>
                                {pinned ? '' : <Date dateString={date} />}
                            </small>
                        </li>
                    ))}
                </ul>
            {/*</section>*/}
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
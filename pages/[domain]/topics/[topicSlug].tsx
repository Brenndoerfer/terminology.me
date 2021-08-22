import { getAuthors, getTerms } from "../../../lib/loader"
import HeaderNavbar from '../../../components/shared/HeaderNavbar';
import Layout from '../../../components/layout/Layout';
import Footer from '../../../components/shared/Footer';
import Newsletter from '../../../components/landing/Newsletter';
import TermSuggestions from "../../../components/modular/TermSuggestions";
import HeadMeta from "../../../components/shared/HeadMeta";
import { IAuthor, ITerm } from "../../../lib/loaderInterface";
import GoToTop from "../../../components/shared/GoToTop";
import AppliactionLayout from '../../../components/term/ApplicationLayout';
import dynamic from 'next/dynamic';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ data }) {

    return (
        <>
            <Layout title="Authors" term={false}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {

    // const authors = getAuthors()
    // const author = authors.filter(author => author.slug === params.name)[0]

    return {
        props: {
            data: params
        }
    }
}

export async function getStaticPaths() {

    const allTopics = [{ domain: 'data-science', slug: 'my-topic' }]

    return {
        paths: allTopics.map((topic) => {
            return {
                params: {
                    domain: topic.domain,
                    topicSlug: topic.slug,
                }
            }
        }),
        fallback: false,
    }
}
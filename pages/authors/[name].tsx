import { getAllItems, getAuthors, getTerms } from "../../lib/loader"
import HeaderNavbar from '../../components/HeaderNavbar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Landing/Newsletter';
import TermSuggestions from "../../components/Landing/TermSuggestions";
import HeadMeta from "../../components/HeadMeta";
import { IAuthor, ITerm } from "../../lib/loaderInterface";
import GoToTop from "../../components/GoToTop";
import AppliactionLayout from '../../components/Term/ApplicationLayout';
import dynamic from 'next/dynamic';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ author }: { author: IAuthor }) {

    return (
        <>
            <Layout title="Authors" term={false}>
                <pre>{JSON.stringify(author, null, 2)}</pre>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }: { params: { name: string } }) {

    const authors = getAuthors()
    const author = authors.filter(author => author.slug === params.name)[0]

    return {
        props: {
            author
        }
    }
}

export async function getStaticPaths() {

    const allAuthors = getAuthors()

    return {
        paths: allAuthors.map((author) => {
            return {
                params: {
                    name: author.slug
                }
            }
        }),
        fallback: false,
    }
}
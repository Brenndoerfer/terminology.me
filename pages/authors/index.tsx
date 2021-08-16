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
import Link from 'next/link';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ authors }: { authors: IAuthor[] }) {
    console.log(authors);

    return (
        <>
            <Layout title="Authors" term={false}>

                {authors.map(author => (
                    <>
                        <div key={author.slug}>
                            <Link href={'/authors/' + author.slug}><a>{author.slug}</a></Link>
                            <pre>{JSON.stringify(author, null, 2)}</pre>
                        </div>
                    </>
                )
                )}
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const authors = getAuthors()

    return {
        props: {
            authors
        }
    }
}
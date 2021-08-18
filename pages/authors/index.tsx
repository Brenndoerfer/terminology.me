import { getAuthors, getTerms } from "../../lib/loader"
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
import StaticPageLayout from '../../components/StaticPageLayout';
import Authors from '../../components/Authors';
import H1 from '../../components/H1';
import CTA from '../../components/CTA';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ authors }: { authors: IAuthor[] }) {
    // console.log(authors);

    return (
        <>
            <Layout title="Authors" term={false}>
                <StaticPageLayout>
                    <H1>Authors</H1>
                    <Authors authors={authors}></Authors>
                </StaticPageLayout>
                <div className="border-t border-gray-200">
                    <CTA
                        branded={true}
                        title="Become an author"
                        href="/contribute"
                        actionText="Contribute now">
                        Share your knowledge. Build expertise. Help others.
                    </CTA>
                </div>
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
import { getAllItems, getTerms } from "../../lib/loader"
import HeaderNavbar from '../../components/HeaderNavbar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Landing/Newsletter';
import TermSuggestions from "../../components/Landing/TermSuggestions";
import HeadMeta from "../../components/HeadMeta";
import { ITerm } from "../../lib/loaderInterface";
import GoToTop from "../../components/GoToTop";
import AppliactionLayout from '../../components/Term/ApplicationLayout';
import dynamic from 'next/dynamic';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ searchOptions, termWithTags }: { termWithTags: ITerm, searchOptions: ITerm[] }) {

    return (
        <>
            <Layout title={termWithTags.data.title} term={true}>
                <AppliactionLayout term={termWithTags} searchOptions={searchOptions}></AppliactionLayout>
                <TermSuggestions title="You might also be interested in" css="pt-12" />
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {

    const all: ITerm[] = getTerms();

    // returns data for the path
    const termList: ITerm[] = (all.filter(term => term.slug === params.slug))
    const searchOptions = all.map(term => { return { value: term.slug, label: term.data.title } })
    const term = termList[0];

    const allTitles: string[] = []
    await Promise.all(all.map(async (item) => {
        allTitles.push(item.data.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))
    }))

    const termWithTags = termList.map((item: ITerm) => {
        if (item.data.tags) {
            item.data.tags = item.data.tags.filter(tag => allTitles.includes(tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')))
        }
        return item
    })[0] // get first and only element. It's the content for the pre-rendered page

    return {
        props: {
            searchOptions, term, termWithTags
        }
    }
}

export async function getStaticPaths() {

    const allTerms = getTerms()
    return {
        paths: allTerms.map((term) => {
            return {
                params: {
                    slug: term.slug
                }
            }
        }),
        fallback: false,
    }
}
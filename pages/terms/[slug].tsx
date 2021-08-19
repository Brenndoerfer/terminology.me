import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';
import { getMostRecentTerms, getTerms } from "../../lib/loader"
import { ITerm } from "../../lib/loaderInterface";
import { ISearchOptions } from '../../components/SelectSearchInterface';
import AppliactionLayout from '../../components/Term/ApplicationLayout';
import { ITermSuggestions } from '../../components/TermSuggestions';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));
const TermSuggestions = dynamic(() => import('../../components/TermSuggestions'));

interface ITermProps {
    termWithTags: ITerm,
    searchOptions: ISearchOptions[],
    recentTerms: ITermSuggestions[]
}

export default function Term(props: ITermProps) {

    return (
        <>
            <Layout title={props.termWithTags.data.title} term={true}>
                <AppliactionLayout term={props.termWithTags} searchOptions={props.searchOptions}></AppliactionLayout>
                <TermSuggestions title="You might also be interested in" terms={props.recentTerms} css="pt-12" />
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
    const recentTerms = getMostRecentTerms()

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
            searchOptions, termWithTags, recentTerms
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
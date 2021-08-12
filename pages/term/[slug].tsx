import { getAllItems } from "../../lib/loader"
import HeaderNavbar from '../../components/HeaderNavbar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import AppliactionLayout from '../../components/Term/ApplicationLayout';
import React from "react";
import Newsletter from '../../components/Landing/Newsletter';
import TermSuggestions from "../../components/Landing/TermSuggestions";
import HeadMeta from "../../components/HeadMeta";
import { Item } from "../../lib/IItemData";
import GoToTop from "../../components/GoToTop";


export default function Term({ term, searchOptions }: { term: Item, searchOptions: Item[] }) {

    return (
        <>
            <HeadMeta title={term.data.title} term={true} />
            <HeaderNavbar />
            <Layout>
                <AppliactionLayout content={term} searchOptions={searchOptions}></AppliactionLayout>
            </Layout>
            <Newsletter />
            <TermSuggestions title="You might also be interested in" css="pt-12" />
            <Footer />
            <GoToTop />
        </>
    )
}

export async function getStaticProps({ params }) {
    const all = getAllItems()
    const term = (all.filter(term => term.slug === params.slug))[0]
    const searchOptions = all.map(term => { return { value: term.slug, label: term.data.title } })

    return {
        props: {
            searchOptions, term
        }
    }
}

export async function getStaticPaths() {

    const allTerms = getAllItems()
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
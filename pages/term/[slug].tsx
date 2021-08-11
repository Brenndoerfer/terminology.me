import { getAllItems } from "../../lib/loader"
import HeaderNavbar from '../../components/HeaderNavbar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import AppliactionLayout from '../../components/Term/ApplicationLayout';
import React from "react";
import Newsletter from '../../components/Landing/Newsletter';
import TermSuggestions from "../../components/Landing/TermSuggestions";


export default function Term({ term, all }: { term: Item, all: Item[] }) {

    return (
        <>
            <HeaderNavbar />
            <Layout>
                <AppliactionLayout content={term}></AppliactionLayout>
            </Layout>
            <Newsletter />
            <TermSuggestions title="You might be interested in" />
            <Footer />
        </>
    )
}

export async function getStaticProps({ params }) {
    const all = getAllItems()
    const term = (all.filter(term => term.slug === params.slug))[0]

    return {
        props: {
            all, term
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
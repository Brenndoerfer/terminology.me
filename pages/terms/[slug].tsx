import dynamic from 'next/dynamic';
import Layout from '../../components/layout/Layout';
import { getAuthorBySlug, getAuthors, getMostRecentTerms, getTerms } from "../../lib/loader"
import { IAuthor, ITerm } from "../../lib/loaderInterface";
import { ISearchOptions } from '../../components/modular/SelectSearchInterface';
import AppliactionLayout from '../../components/term/ApplicationLayout';
import { ITermSuggestions } from '../../components/modular/TermSuggestions';
import Container from '../../components/layout/Container';
import React from 'react';
import H2 from '../../components/shared/H2';
import ProgressBar from '../../components/term/ScrollProgress';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));
const TermSuggestions = dynamic(() => import('../../components/modular/TermSuggestions'));

interface ITermProps {
    termWithTags: ITerm,
    searchOptions: ISearchOptions[],
    recentTerms: ITermSuggestions[],
    author: IAuthor,
}

export default function Term(props: ITermProps) {

    return (
        <>
            <Layout title={props.termWithTags.data.title} term={true}>




                <AppliactionLayout term={props.termWithTags} author={props.author} searchOptions={props.searchOptions}></AppliactionLayout>

                <Container size="sm" css="pt-0 sm:pt-6">
                    <H2 css="mb-6">You might be interested in</H2>
                    <TermSuggestions terms={props.recentTerms} />
                </Container>
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
    const author = getAuthorBySlug(term.data.author)

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
            searchOptions, termWithTags, recentTerms, author
        }
    }
}

export async function getStaticPaths() {

    const allTerms = getTerms()

    return {
        paths: allTerms.map((term) => {
            return {
                params: {
                    slug: term.slug,
                }
            }
        }),
        fallback: false,
    }
}
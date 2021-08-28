import dynamic from 'next/dynamic';
import Layout from '../components/layout/Layout';
import React from 'react';
import Hero from '../components/landing/Hero';
import TermSuggestions, { ITermSuggestions } from '../components/modular/TermSuggestions';
import { ITerm } from '../lib/loaderInterface';
import { getMostRecentTerms, getTerms } from '../lib/loader';
import { ISearchOptions } from '../components/modular/SelectSearchInterface';
import Container from '../components/layout/Container';
import H2 from '../components/shared/H2';
import TopicGallery from '../components/landing/TopicGallery';
import H1 from '../components/shared/H1';
const Domains = dynamic(() => import('../components/landing/Domains'))
const Newsletter = dynamic(() => import('../components/landing/Newsletter'))
const Stats = dynamic(() => import('../components/landing/Stats'))
// import Stats from '../components/Landing/Stats';
// import TopicGallery from '../components/Landing/TopicGallery';
import SearchGrid from '../components/domain/SearchGrid';

interface IHomeProps {
    recentTerms: ITermSuggestions[],
    allSearchOptions: ISearchOptions[],
}

export default function Home(props: IHomeProps) {
    console.log(props.allSearchOptions);

    return (
        <>
            <Layout>

                <Container size="sm">
                    <H1>Terminology.me</H1>
                    <SearchGrid searchOptions={props.allSearchOptions} />
                </Container>

                {/* <Container css="" >
                    <Hero searchOptions={props.allSearchOptions} />
                </Container> */}

                <Container size="sm">
                    <H2>Most recent terms</H2>
                    <TermSuggestions terms={props.recentTerms} />
                </Container>

                <Container css="relative overflow-hidden" size="sm">

                    <Domains />
                </Container>

                {/* <TopicGallery /> */}

                <div className="bg-white">
                    <Container size="lg">
                        <Newsletter />
                    </Container>
                </div>

                <Container size="sm">
                    <Stats />
                </Container>

            </Layout>
        </>

    )
}

export async function getStaticProps() {
    const allItems: ITerm[] = getTerms()
    // console.log(allItems)

    const searchOptions = allItems.map(term => { return { value: term.slug, label: term.data.title } })
    const recentTerms = getMostRecentTerms();
    // var allTags: string[][] = []
    // var allTitles: string[] = []

    // await Promise.all(allItems.map(async (item) => {

    //     // allTags.push(item.data.tags)
    //     allTitles.push(item.data.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))

    // }))

    // // allTags = allTags.flat().map(tag => tag.toLowerCase());

    // TODO tags
    // const allItemsWithTags = allItems.map(item => {
    //     if (item.data.tags) {
    //         item.data.tags = item.data.tags.filter(tag => allTitles.includes(tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')))
    //     }
    //     return item
    // })



    // console.log(allItemsWithTags)


    return {
        props: {
            recentTerms: recentTerms,
            allSearchOptions: searchOptions
        }
    }
}

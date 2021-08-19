import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import React from 'react';
import Hero from '../components/Landing/Hero';
import TermSuggestions, { ITermSuggestions } from '../components/Landing/TermSuggestions';
import { ITerm } from '../lib/loaderInterface';
import { getMostRecentTerms, getTerms } from '../lib/loader';
import { ISearchOptions } from '../components/SelectSearchInterface';
const Domains = dynamic(() => import('../components/Landing/Domains'))
const Newsletter = dynamic(() => import('../components/Landing/Newsletter'))
const Stats = dynamic(() => import('../components/Landing/Stats'))
// import Stats from '../components/Landing/Stats';
// import TopicGallery from '../components/Landing/TopicGallery';

interface IHomeProps {
    recentTerms: ITermSuggestions[],
    allSearchOptions: ISearchOptions[],

}

export default function Home(props: IHomeProps) {
    console.log(props);

    return (
        <>
            <Layout>
                <Hero searchOptions={props.allSearchOptions} />
                <TermSuggestions title="Most recent terms" terms={props.recentTerms} />
                <Domains />
                {/* <TopicGallery /> */}
                <Newsletter />
                <Stats />
            </Layout>
        </>

    )
}

export async function getStaticProps() {
    const allItems: ITerm[] = getTerms()
    const searchOptions = allItems.map(term => { return { value: term.slug, label: term.data.title } })
    const recentTerms = getMostRecentTerms();
    // var allTags: string[][] = []
    // var allTitles: string[] = []

    // await Promise.all(allItems.map(async (item) => {

    //     // allTags.push(item.data.tags)
    //     allTitles.push(item.data.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))

    // }))

    // // allTags = allTags.flat().map(tag => tag.toLowerCase());

    // const allItemsWithTags = allItems.map(item => {
    //     if (item.data.tags) {
    //         item.data.tags = item.data.tags.filter(tag => allTitles.includes(tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')))
    //     }
    //     return item
    // })



    // console.log(allItemsWithTags)


    return {
        props: { recentTerms: recentTerms, allSearchOptions: searchOptions }
    }
}

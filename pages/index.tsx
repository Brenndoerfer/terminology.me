import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderNavbar from '../components/HeaderNavbar';
import Layout from '../components/Layout';
import React from 'react';
import Hero from '../components/Landing/Hero';
import TermSuggestions from '../components/Landing/TermSuggestions';
import Stats from '../components/Landing/Stats';
import Newsletter from '../components/Landing/Newsletter';
import Footer from '../components/Footer';
import { Item } from '../lib/IItemData';
import { getAllItems } from '../lib/loader';
import Domains from '../components/Landing/Domains';
import TopicGallery from '../components/Landing/TopicGallery';
import HeadMeta from '../components/HeadMeta';
import GoToTop from '../components/GoToTop';

export default function Home({ allItems, searchOptions }) {
    return (
        <>
            <HeadMeta />
            <HeaderNavbar />
            <Layout>
                <Hero searchOptions={searchOptions} />
                <TermSuggestions title="Most recent terms" />
                <Domains />
                <TopicGallery />
                <Newsletter />
                <Stats />
            </Layout>
            <Footer />
            <GoToTop />
        </>

    )
}

export async function getStaticProps() {
    const allItems: Item[] = getAllItems();

    // var allTags: string[][] = []
    var allTitles: string[] = []

    await Promise.all(allItems.map(async (item) => {

        // allTags.push(item.data.tags)
        allTitles.push(item.data.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))

    }))

    // allTags = allTags.flat().map(tag => tag.toLowerCase());

    const allItemsWithTags = allItems.map(item => {
        item.data.tags = item.data.tags.filter(tag => allTitles.includes(tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')))
        return item
    })

    const searchOptions = allItems.map(term => { return { value: term.slug, label: term.data.title } })

    // console.log(allItemsWithTags)


    return {
        props: { allItems: allItemsWithTags, searchOptions }
    }
}
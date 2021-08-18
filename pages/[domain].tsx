
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import { DOMAINS } from '../lib/constants';
import H1 from '../components/H1';
import { domainHrefToLongname } from '../lib/transformer';
import StaticPageLayout from '../components/StaticPageLayout';
import TopicsList from '../components/TopicsList';
import SelectSearch from '../components/SelectSearch';
import React from 'react';
import Newsletter from '../components/Landing/Newsletter';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ domain }: { domain: string }) {
    return (
        <>
            <Layout title="Authors" term={false}>
                <StaticPageLayout>
                    <H1>{domainHrefToLongname(domain)}</H1>

                    <SelectSearch></SelectSearch>
                    <TopicsList></TopicsList>

                </StaticPageLayout>
                {/* <div className="border-t border-gray-200">
                    <Newsletter></Newsletter>
                </div> */}

            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {

    return {
        props: {
            domain: params.domain
        }
    }
}

export async function getStaticPaths() {

    return {
        paths: DOMAINS.map((domain) => {
            return {
                params: {
                    domain: domain
                }
            }
        }),
        fallback: false,
    }
}
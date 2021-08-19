
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import { DOMAINS, GLOSSARY_PATH } from '../lib/constants';
import H1 from '../components/H1';
import { domainHrefToLongname } from '../lib/transformer';
import StaticPageLayout from '../components/StaticPageLayout';
import TopicsList from '../components/TopicsList';
import SelectSearch from '../components/SelectSearch';
import React from 'react';
import Newsletter from '../components/Landing/Newsletter';
import Link from 'next/link';
import Articles from '../components/Domain/Articles';
import TermSuggestions, { ITermSuggestions } from '../components/TermSuggestions';
import { getMostRecentTerms, getTerms } from '../lib/loader';
import { ISearchOptions } from '../components/SelectSearchInterface';
import Topics from '../components/Domain/Topics';
import H2 from '../components/H2';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));

interface IDomainProps {
    recentTerms: ITermSuggestions[],
    allSearchOptions: ISearchOptions[],
    domain: string,

}

export default function Domain(props: IDomainProps) {


    const customStyles = {
        // option: (provided, state) => ({
        //     ...provided,
        //     padding: 12,
        // }),
        control: (provided, state) => ({
            ...provided,
            padding: 12,
            borderColor: '#ddd',
            //     paddingTop: 12,
            //     paddingBottom: 12,
            //     fontSize: 20
        })
    }


    return (
        <>
            <Layout title="Authors" term={false}>
                <StaticPageLayout>
                    <H1>{domainHrefToLongname(props.domain) || ''}</H1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
                        {/* <div className="bg-indigo-500 h-40 col-span-2"></div> */}

                        <div className="lg:col-span-2">
                            <SelectSearch options={[]} styles={customStyles}></SelectSearch>
                        </div>
                        <Link href={`${GLOSSARY_PATH}/${props.domain}`}>
                            <a className="">
                                <div className="btn w-full p-4 lg:h-full flex items-center justify-center border ">All {domainHrefToLongname(props.domain)} Terms</div>
                            </a>
                        </Link>

                    </div>
                    <Articles></Articles>
                </StaticPageLayout>
                <div className="">
                    <TermSuggestions title={`Most recently added terms`} underline={true} terms={props.recentTerms} css="py-0 sm:py-0 " />
                </div>
                <StaticPageLayout>
                    <H2 title={`${domainHrefToLongname(props.domain)} Topics`} underline={true}></H2>
                    <Topics></Topics>

                </StaticPageLayout>



                {/* <div className="flex flex-wrap -m-4 sm:-m-6">

                        <div className="xl:w-1/2 w-full p-4 sm:p-6">
                            <SelectSearch options={[]} styles={customStyles}></SelectSearch>

                            <Link href={``}>
                                <a>
                                    <div className="bg-white p-4 rounded-md border border-gray-200 hover:shadow-sm hover:border-indigo-300 hover-fade hover:bg-indigo-50 mt-8">
                                        <img class="h-100 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                        <h3 className="tracking-wied text-indigo-500 text-xs font-medium uppercase">{'term.domain'}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mt-1">{'term.title'}</h2>
                                    </div>
                                </a>
                            </Link>
                        </div>


                        {[1, 2, 3, 4].map(item => (
                            <div className="xl:w-1/4 w-full md:w-1/2 p-4 sm:p-6" key={'term.title'}>
                                <Link href={``}>
                                    <a>
                                        <div className="bg-white p-4 rounded-md border border-gray-200 hover:shadow-sm hover:border-indigo-300 hover-fade hover:bg-indigo-50">
                                            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                            <h3 className="tracking-wied text-indigo-500 text-xs font-medium uppercase">{'term.domain'}</h3>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mt-1">{'term.title'}</h2>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div> */}



                {/* <SelectSearch options={[]}></SelectSearch> */}
                {/* <TopicsList></TopicsList> */}



                {/* <div className="border-t border-gray-200">
                    <Newsletter></Newsletter>
                </div> */}

            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {

    getTerms()
    console.log(params);
    console.log(getMostRecentTerms());

    const recentTerms = getMostRecentTerms()
        .filter(term => params.domain === term.domainHref);

    console.log(recentTerms);

    return {
        props: {
            domain: params.domain,
            recentTerms: recentTerms
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
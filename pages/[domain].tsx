
import dynamic from 'next/dynamic';
import Layout from '../components/layout/Layout';
import { DOMAINS, GLOSSARY_PATH } from '../lib/constants';
import H1 from '../components/shared/H1';
import { domainHrefToLongname, domainHrefToShortname, domainShortcutToDomainHref } from '../lib/transformer';
import React from 'react';
import TermSuggestions, { ITermSuggestions } from '../components/modular/TermSuggestions';
import { getDomainSearchOptions, getMostRecentTerms, getTerms } from '../lib/loader';
import { ISearchOptions } from '../components/modular/SelectSearchInterface';
import H2 from '../components/shared/H2';
import SearchGrid from '../components/domain/SearchGrid';
import Container from '../components/layout/Container';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));

interface IDomainProps {
    recentTerms: ITermSuggestions[],
    searchOptions: ISearchOptions[],
    domain: string,
}

export default function Domain(props: IDomainProps) {


    return (
        <>
            <Layout title="Authors" term={false}>



                <Container size="sm">
                    <H1>{domainHrefToLongname(props.domain) || ''}</H1>
                    <SearchGrid domainHref={props.domain} searchOptions={props.searchOptions} />
                </Container>

                {/* <Container size="sm">
                    <Articles></Articles>
                </Container> */}


                <Container size="sm">
                    {props.recentTerms.length > 0 ? (
                        <>
                            <H2 underline={true}>{`Recent ${domainHrefToLongname(props.domain)?.toLowerCase()} terms`}</H2>
                            <TermSuggestions terms={props.recentTerms} />
                        </>
                    ) : (
                        <p>Content in progress</p>
                    )}
                </Container>


                {/* <Container size="sm">
                    <H2 underline={true}>{`${domainHrefToLongname(props.domain)} Topics`}</H2>
                    <Topics></Topics>
                </Container> */}



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

    const recentTerms = getMostRecentTerms()
        .filter(term => params.domain === term.domainHref);

    // console.log(recentTerms);

    return {
        props: {
            domain: params.domain,
            recentTerms: recentTerms,
            searchOptions: getDomainSearchOptions(domainHrefToShortname(params.domain)),
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
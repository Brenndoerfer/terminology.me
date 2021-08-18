import { getAuthors, getTerms } from "../../lib/loader"
import HeaderNavbar from '../../components/HeaderNavbar';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Landing/Newsletter';
import TermSuggestions from "../../components/Landing/TermSuggestions";
import HeadMeta from "../../components/HeadMeta";
import { IAuthor, ITerm } from "../../lib/loaderInterface";
import GoToTop from "../../components/GoToTop";
import AppliactionLayout from '../../components/Term/ApplicationLayout';
import dynamic from 'next/dynamic';
import React from "react";
import StaticPageLayout from "../../components/StaticPageLayout";
import Author from '../../components/Author';
import H1 from '../../components/H1';
import { AUTHORS_PATH } from '../../lib/constants';
import CTA from "../../components/CTA";
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));

interface IPropAuthor {
    author: IAuthor
}

export default function AuthorDynamicComponent(props: IPropAuthor) {
    return (
        <>
            <Layout title="Authors" term={false}>
                <StaticPageLayout>
                    <H1 backHref={AUTHORS_PATH}>{props.author.firstname} {props.author.lastname}</H1>
                    <Author author={props.author} />
                </StaticPageLayout>
                <div className="border-t border-gray-200">
                    <CTA
                        branded={true}
                        title="Become an author"
                        href="/contribute"
                        actionText="Contribute now">
                        Share your knowledge. Build expertise. Help others.
                    </CTA>
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }: { params: { name: string } }) {

    const authors = getAuthors()
    const author = authors.filter(author => author.slug === params.name)[0]

    return {
        props: {
            author
        }
    }
}

export async function getStaticPaths() {

    const allAuthors = getAuthors()

    return {
        paths: allAuthors.map((author) => {
            return {
                params: {
                    name: author.slug
                }
            }
        }),
        fallback: false,
    }
}
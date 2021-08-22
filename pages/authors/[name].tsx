import { getAuthors, getTerms } from "../../lib/loader"
import Layout from '../../components/layout/Layout';
import { IAuthor, ITerm } from "../../lib/loaderInterface";
import React from "react";
import Author from '../../components/pages/Author';
import H1 from '../../components/shared/H1';
import { AUTHORS_PATH } from '../../lib/constants';
import CTA from "../../components/modular/CTA";
import Container from "../../components/layout/Container";

interface IPropAuthor {
    author: IAuthor
}

export default function AuthorDynamicComponent(props: IPropAuthor) {
    return (
        <>
            <Layout title="Authors" term={false}>
                <Container>
                    <H1 backHref={AUTHORS_PATH}>{`${props.author.firstname} ${props.author.lastname}`}</H1>
                    <Author author={props.author} />
                </Container>
                <div className="border-t border-gray-200">
                    <CTA
                        branded={true}
                        title="Become an author"
                        href="/contribute"
                        actionText="Contribute now"
                    >
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
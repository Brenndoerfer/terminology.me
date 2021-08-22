import { getAuthors, getTerms } from "../../lib/loader"
import Layout from '../../components/layout/Layout';
import { IAuthor, ITerm } from "../../lib/loaderInterface";
import Authors from '../../components/pages/Authors';
import H1 from '../../components/shared/H1';
import CTA from '../../components/modular/CTA';
import Container from '../../components/layout/Container';


export default function AuthorsComponent({ authors }: { authors: IAuthor[] }) {

    return (
        <>
            <Layout title="Authors" term={false}>
                <Container>
                    <H1>Authors</H1>
                    <Authors authors={authors}></Authors>
                </Container>
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

export async function getStaticProps() {

    const authors = getAuthors()

    return {
        props: {
            authors
        }
    }
}

import dynamic from 'next/dynamic';
import Layout from '../../../components/Layout';
// const AppliactionLayout = dynamic(() => import('../../components/Term/ApplicationLayout'));


export default function Term({ domain }: { domain: string }) {
    return (
        <>
            <Layout title="Authors" term={false}>
                <p>test</p>
                <pre>{JSON.stringify(domain)}</pre>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {

    return {
        props: {
            domain: params.articleSlug
        }
    }
}

export async function getStaticPaths() {

    const articles = [
        {
            title: 'my-article',
            domain: 'data-science'
        }
    ]

    return {
        paths: articles.map((article) => {
            return {
                params: {
                    domain: article.domain,
                    articleSlug: article.title,
                }
            }
        }),
        fallback: false,
    }
}
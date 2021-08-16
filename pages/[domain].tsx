
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
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
            domain: params.domain
        }
    }
}

export async function getStaticPaths() {

    const domains = [
        'data-science',
        'data-engineering',
        'software-engineering',
        'business-and-finance',
        'blockchain',
        'cloud',
    ];

    return {
        paths: domains.map((domain) => {
            return {
                params: {
                    domain: domain
                }
            }
        }),
        fallback: false,
    }
}
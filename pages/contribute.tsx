import Layout from '../components/Layout';
import StaticPageLayout from '../components/StaticPageLayout';
import H1 from '../components/H1';
import CTA from '../components/CTA';

export default function Home() {
    return (
        <>
            <Layout title="How to contribute">
                <StaticPageLayout>
                    <H1>Contribute</H1>
                </StaticPageLayout>
                <CTA
                    branded={true}
                    title="You are in good company"
                    href="/authors"
                    actionText="All the authors">
                    Everyone has different expertise. Help make Terminology.me a better and more exhaustive place to aquire knowledge.
                </CTA>
            </Layout>
        </>

    )
}


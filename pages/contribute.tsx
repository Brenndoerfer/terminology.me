import Layout from '../components/layout/Layout';
import StaticPageLayout from '../components/layout/StaticPageLayout';
import H1 from '../components/shared/H1';
import CTA from '../components/modular/CTA';

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


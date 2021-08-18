import Layout from '../components/Layout';
import H1 from '../components/H1';
import StaticPageLayout from '../components/StaticPageLayout';

export default function Home() {
    return (
        <>
            <Layout title="About Us">
                <StaticPageLayout>
                    <H1>About</H1>
                    <div className="">Terminology.me is an open-source platform. The goal is to crowd-source terminology for the modern engineer.</div>
                </StaticPageLayout>
            </Layout>
        </>

    )
}


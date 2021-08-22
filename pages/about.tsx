import Layout from '../components/layout/Layout';
import H1 from '../components/shared/H1';
import Container from '../components/layout/Container';

export default function Home() {
    return (
        <>
            <Layout title="About Us">
                <Container>
                    <H1>About</H1>
                    <div className="">Terminology.me is an open-source platform. The goal is to crowd-source terminology for the modern engineer.</div>
                </Container>
            </Layout>
        </>

    )
}


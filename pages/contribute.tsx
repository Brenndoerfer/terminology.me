import Layout from '../components/layout/Layout';
import H1 from '../components/shared/H1';
import CTA from '../components/modular/CTA';
import Container from '../components/layout/Container';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Layout title="How to contribute">
                <Container>
                    <H1>Contribute</H1>
                    <p>Contribute by raising a pull request on Github (<Link href="https://github.com/Brenndoerfer/terminology.me"><a className="link" target="_blank">https://github.com/Brenndoerfer/terminology.me</a></Link>)</p>
                </Container>
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


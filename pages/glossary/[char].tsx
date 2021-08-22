
import Layout from '../../components/layout/Layout';


export default function Term({ char }: { char: string }) {
    return (
        <>
            <Layout title={`Glossary ${char.toUpperCase()}`} term={false}>
                <p>{`Glossary ${char.toUpperCase()}`}</p>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {

    return {
        props: {
            char: params.char
        }
    }
}

export async function getStaticPaths() {

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('')

    return {
        paths: CHARS.map((char) => {
            return {
                params: {
                    char
                }
            }
        }),
        fallback: false,
    }
}
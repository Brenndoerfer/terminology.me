import Layout from '../../components/layout/Layout';
import { GLOSSARY_PATH } from '../../lib/constants';
import Link from 'next/link';




export default function Glossary() {

    return (
        <>
            <Layout title="Glossary" term={false}>

                <div className="container mx-auto">
                    <p>Glossary</p>
                    {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('').map((char) => (
                        <div key={char}>
                            <Link href={`${GLOSSARY_PATH}/${char}`}><a className="text-2xl">{char.toUpperCase()}</a></Link>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    )
}

import classNames from 'classnames';
import StaticPageLayout from './StaticPageLayout';
import H2 from './H2';
import { TERM_PATH } from '../lib/constants';
import Link from 'next/link';


export interface ITermSuggestions {
    title: string
    slug: string,
    domain: string,
    domainHref: string,
}
interface TermSuggestionsProp {
    title: string,
    terms?: ITermSuggestions[],
    css?: string,
    underline?: boolean,
}

export default function TermSuggestions(props: TermSuggestionsProp) {
    return (
        <>
            <StaticPageLayout>
                <section>
                    <H2 title={props.title} underline={props.underline}></H2>
                    <div className="flex flex-wrap -m-4">
                        {props.terms && props.terms.map((term) => ((
                            <div className="xl:w-1/4 md:w-1/2 p-4" key={term.title}>
                                <Link href={`${TERM_PATH}/${term.slug}`}><a>
                                    <div className="bg-white p-4 rounded-md border border-gray-200 hover:shadow-sm hover:border-indigo-300 hover-fade hover:bg-indigo-50">
                                        <h3 className="tracking-wied text-indigo-500 text-xs font-medium uppercase">{term.domain}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mt-1">{term.title}</h2>
                                    </div>
                                </a></Link>
                            </div>
                        )
                        ))}
                    </div>
                </section>
            </StaticPageLayout>
        </>
    )
}
import { TERM_PATH } from '../../lib/constants';
import Link from 'next/link';
import classNames from 'classnames';
import { domainShortToColor } from '../../lib/transformer';


export interface ITermSuggestions {
    title: string
    slug: string,
    domain: string,
    domainShort: string,
    domainHref: string,
}

interface TermSuggestionsProp {
    terms?: ITermSuggestions[],
    underline?: boolean,
}


export default function TermSuggestions(props: TermSuggestionsProp) {
    return (
        <>

            <div className="flex flex-wrap -m-4">
                {props.terms && props.terms.map((term) => ((
                    <div className="xl:w-1/4 md:w-1/2 p-4" key={term.title}>
                        <Link href={`${TERM_PATH}/[slug]`} as={`${TERM_PATH}/${term.slug}`} shallow={false}><a>
                            <div className={classNames("bg-white p-4 rounded-md border shadow-sm border-gray-100 hover-fade", "border-gray-100", 'hover:' + domainShortToColor(term.domainShort).mediumBorder)}>
                                <h3 className={classNames("tracking-wied text-xs font-medium uppercase", domainShortToColor(term.domainShort).text)}>{term.domain}</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mt-1">{term.title}</h2>
                            </div>
                        </a></Link>
                    </div>
                )
                ))}
            </div>
        </>
    )
}
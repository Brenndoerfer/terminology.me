import Link from 'next/link';
import { TERM_PATH } from '../../lib/constants';
import { ITerm } from '../../lib/loaderInterface';
export default function RelatedTags(term: ITerm) {
    return (
        <>
            <div>
                <div className="text-2xl font-bold">Related Terms</div>
                <div className="h-1 w-10 bg-indigo-500 mb-4"></div>
                {term.data.tags?.map(tag => (
                    <Link href={`${TERM_PATH}/${tag.replace(/ /g, '-')}`} key={term.hash + '-tag'} >
                        <a>
                            <span className="inline-block py-1 px-2 mr-2 my-1 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-tight uppercase">{tag}</span>
                        </a>
                    </Link>

                ))}
            </div>
        </>
    )
}
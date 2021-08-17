/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/solid'
import classNames from 'classnames';
import Link from 'next/link';
import { TERM_PATH } from '../../lib/constants';
import { ITerm } from '../../lib/loaderInterface';
import { captializeWords, domainShortcutToLongname, domainShortcutToDomainHref } from '../../lib/transformer';
interface IBreadcrumb {
    name: string,
    href: string,
    current: boolean;
}

const constructBreadcrumb = (props: ITerm): IBreadcrumb[] => {

    const pages: IBreadcrumb[] = []
    let domainTopic: string = ''


    if (props.data.domain) {
        let domainLong = domainShortcutToLongname(props.data.domain)
        domainTopic = domainShortcutToDomainHref(props.data.domain) || ''

        if (domainLong) {
            let domainLower = domainShortcutToLongname(props.data.domain)?.toLowerCase().replace(/ /g, '-').trim()
            pages.push({ name: domainLong, href: '/' + domainLower, current: false })
        }
    }

    if (props.data.topics && props.data.topics.length > 0) {
        if (props?.data?.type?.toLowerCase().trim() === 'term' || !props.data.type) { // default to term

            if (domainTopic.length > 0) {
                domainTopic = '/' + domainTopic
            }

            let name = captializeWords(props.data.topics[0])
            let slug = name.toLowerCase().replace(/ /g, '-')

            const topicUrl: string = domainTopic + '/topics/' + slug

            pages.push({ name: name, href: topicUrl, current: false })
        }
    }

    if (props?.data?.title) {
        if (props?.data?.type?.toLowerCase().trim() === 'term' || !props.data.type) { // default to term
            pages.push({ name: props.data.title, href: TERM_PATH + '/' + props.slug, current: true })
        }
    }

    return pages
}

export default function Breadcrumbs(term: ITerm) {

    const pages = constructBreadcrumb(term);

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/"><a className="text-white">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                        </Link>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <svg
                                className="flex-shrink-0 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <Link href={page.href}>
                                <a
                                    className={
                                        classNames(
                                            'ml-2 text-sm font-medium text-white hover:underline',
                                            { ['font-extrabold']: page.current }
                                        )}
                                    aria-current={page.current ? 'page' : undefined}
                                >
                                    {page.name}
                                </a>
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav >
    )
}

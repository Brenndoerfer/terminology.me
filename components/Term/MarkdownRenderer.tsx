import Image from 'next/image';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import styles from './MarkdownRenderer.module.css'
import { parseISO, format } from 'date-fns'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

import rehypeKatex from 'rehype-katex';
import unwrapImages from 'remark-unwrap-images'

import { ArticleReactMarkdownComponents } from '../../lib/reactMarkdownComponents';

const getMostRecentDate = (createdAt: string, updatedAt: string) => {
    if (updatedAt) {
        return <time dateTime={updatedAt}>{format(parseISO(updatedAt), 'LLL d, yyyy')}</time>
    }

    return <time dateTime={createdAt}>{format(parseISO(createdAt || new Date().toISOString()), 'LLL d, yyyy')}</time>
}

export default function MarkdownRenderer(content) {
    return (
        <>
            <div className={styles.rm}>
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="">{content.content.data.title}</h1>
                    <div className="h-2 w-20 bg-indigo-500"></div>
                    <div className="mt-4 mb-8">
                        By <span>{content.content.data.author}</span> | Updated {getMostRecentDate(content.content.data.created, content.content.data.updated)}
                    </div>
                </div>

                <pre className="my-16 text-sm">
                    {JSON.stringify(content, null, 2)}
                </pre>

                <ReactMarkdown
                    components={ArticleReactMarkdownComponents}
                    remarkPlugins={[unwrapImages, [remarkGfm, { singleTilde: false }], remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    children={content.content.content}
                />
            </div>
        </>
    )
}
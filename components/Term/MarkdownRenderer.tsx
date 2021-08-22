import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './MarkdownRenderer.module.css'
import { parseISO, format } from 'date-fns'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

import rehypeKatex from 'rehype-katex';
import unwrapImages from 'remark-unwrap-images'

import { ArticleReactMarkdownComponents } from '../../lib/reactMarkdownComponents';
import { IAuthor, ITerm } from '../../lib/loaderInterface';
import React from 'react';
import { AUTHORS_PATH } from '../../lib/constants';

const getMostRecentDate = (createdAt: string, updatedAt: string) => {
    if (updatedAt) {
        return (
            <span>Updated on <time dateTime={updatedAt}>{format(parseISO(updatedAt), 'LLL d, yyyy')}</time></span>
        )
    }

    return (
        <span>
            Written on <time dateTime={createdAt}>{format(parseISO(createdAt || new Date().toISOString()), 'LLL d, yyyy')}</time>
        </span>)
}

interface IMarkdownRendererProps {
    term: ITerm,
    author: IAuthor,
}

export default function MarkdownRenderer(props: IMarkdownRendererProps) {

    return (
        <>
            <div className={styles.rm}>
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="">{props.term.data.title}</h1>
                    <div className="h-2 w-20 bg-indigo-500"></div>
                    <div className="mt-4 mb-8">
                        By <span><Link href={`${AUTHORS_PATH}/${props.author.slug}`}><a className="underline">{`${props.author.firstname} ${props.author.lastname}`}</a></Link> </span>
                        | {getMostRecentDate(props.term.data.created, props.term.data.updated)}
                    </div>
                </div>

                {/* <pre className="my-16 text-sm">
                    {JSON.stringify(content, null, 2)}
                </pre> */}

                <ReactMarkdown
                    components={ArticleReactMarkdownComponents}
                    remarkPlugins={[unwrapImages, [remarkGfm, { singleTilde: false }], remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    children={props.term.content}
                />
            </div>
        </>
    )
}
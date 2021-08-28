/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import dynamic from 'next/dynamic';
import { Popover } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { IAuthor, ITerm } from '../../lib/loaderInterface';
import { ISearchOptions } from '../SelectSearchInterface';

import { DISQUS_SHORTNAME, DOMAIN } from '../../lib/constants';
import rmStyles from './MarkdownRenderer.module.css'

import MarkdownRenderer from './MarkdownRenderer';
import Breadcrumbs from './Breadcrumbs';
import TermTableOfContents from '../term/TableOfContents';

const VerticalNavigation = dynamic(() => import('./VerticalNavigation'));
const SelectSearch = dynamic(() => import('../modular/SelectSearch'));
const RelatedTags = dynamic(() => import('./RelatedTags'));
const DiscussionEmbed = dynamic(() => import('disqus-react').then((mod) => mod.DiscussionEmbed));

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
interface IAppliactionLayoutProps {
    term: ITerm,
    searchOptions: ISearchOptions[],
    author: IAuthor,
}

export default function AppliactionLayout(props: IAppliactionLayoutProps) {
    return (
        <div className=" bg-gray-50">
            <Popover as="header" className="pb-24 bg-indigo-500">
                {({ open }) => (
                    <>
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                            {/* Search Small */}
                            <div className="relative flex items-center justify-center lg:justify-between">
                                <div className="flex-1 min-w-0 py-5 lg:hidden">
                                    <div className="mx-auto">
                                        <label htmlFor="search" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative text-white focus-within:text-gray-600">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                            </div>
                                            <SelectSearch options={props.searchOptions} inputId='searchSmall' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Breadcrumbs and Search Large*/}
                            <div className="hidden lg:block py-5">
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div className="col-span-2">
                                        <nav className="flex space-x-4 text-white">
                                            <Breadcrumbs term={props.term} />
                                        </nav>
                                    </div>
                                    <div>
                                        <div className="mx-auto">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative text-white focus-within:text-gray-600">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <SelectSearch options={props.searchOptions} inputId='searchBig' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </>
                )}
            </Popover>
            <main className="-mt-24 pb-8 ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="sr-only">Definition for {props.term.data.title}</h1>
                    {/* Main 3 column grid */}
                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        {/* Content + Comments: Left column */}
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                            {/* Content */}
                            <section aria-labelledby="section-1-title">

                                <div className="rounded-sm bg-white overflow-hidden shadow">
                                    <div className="p-6">
                                        <MarkdownRenderer author={props.author} term={props.term} />
                                    </div>
                                </div>
                            </section>

                            {/* Comments */}
                            <section aria-labelledby="section-1-title">
                                <div className="rounded-sm bg-white overflow-hidden shadow">
                                    <div className="p-6">
                                        <div className="">
                                            <div className="w-full mb-6 lg:mb-0">
                                                <h2 className="text-2xl font-bold">Comments</h2>
                                                <div className="h-1 w-10 bg-indigo-500"></div>
                                            </div>
                                            <div className={classNames("mt-8", rmStyles.rm)}>
                                                <DiscussionEmbed
                                                    shortname={DISQUS_SHORTNAME}
                                                    config={
                                                        {
                                                            url: `${DOMAIN}/term/${props.term.slug}}`,
                                                            identifier: props.term.slug,
                                                            title: props.term.data.title
                                                        }
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Content + Related terms: Right column  */}
                        <div className="grid grid-cols-1 gap-4 sticky top-28">
                            <section aria-labelledby="section-2-title">
                                <div className="rounded-sm bg-white overflow-hidden shadow">

                                    <div className="p-6">
                                        {/* <VerticalNavigation term={props.term} /> */}
                                        {/* <hr className="py-4" /> */}
                                        <TermTableOfContents term={props.term} />
                                    </div>
                                </div>
                            </section>

                            {props.term.data.tags && props.term.data.tags.length > 0 && (
                                <section aria-labelledby="section-2-title">
                                    <div className="rounded-sm bg-white overflow-hidden shadow">

                                        <div className="p-6">
                                            <RelatedTags term={props.term} />
                                        </div>
                                    </div>
                                </section>)}
                        </div>

                    </div>
                </div>
            </main>
        </div >
    )
}

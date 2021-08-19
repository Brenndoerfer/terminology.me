import Image from 'next/image';
import { CONTRIBUTE_PATH } from '../../lib/constants';
import Link from 'next/link';
import React from 'react';
import H2 from '../H2';

export default function Stats() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap px-4 sm:px-6 py-16 sm:py-24">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            {/* <h1 className="title-font font-extrabold sm:text-4xl text-3xl mb-2 text-gray-900">We are growing</h1> */}
                            <H2 title="We are growing"></H2>
                            <div className="leading-relaxed -mt-10">Everyone has to start somewhere. We are working everyday on creating more and better content. Want to beecome a contributor?</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                            <p className="leading-relaxed">Data Science</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                            <p className="leading-relaxed">Data Engineering</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                            <p className="leading-relaxed">Software Engineering</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                            <p className="leading-relaxed">Business & Finance</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                            <p className="leading-relaxed">Cloud Technology</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                            <p className="leading-relaxed">Blockchain</p>
                        </div>
                        <p className="mx-3 mt-8">
                            <Link href={CONTRIBUTE_PATH}>
                                <a className="p-4 btn">Become an author</a>
                            </Link>
                        </p>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        {/* <img className="transform scale-75 h-full" src="/assets/static/landing/growing.svg" alt="stats" /> */}
                        <Image src="/assets/static/landing/growing.svg" className="transform scale-90 h-full" layout="responsive" width="812" height="375" alt="stats image" />
                    </div>
                </div>
            </section>
        </>
    )
}
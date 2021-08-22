import Image from 'next/image';
import { CONTRIBUTE_PATH } from '../../lib/constants';
import Link from 'next/link';
import React from 'react';
import H2 from '../shared/H2';
import Container from '../layout/Container';

export default function Stats() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="flex flex-wrap lg:w-1/2 sm:w-2/3 content-start">

                    <div className="w-full mb-6">
                        <H2>We are growing</H2>
                        <div className="leading-relaxed mt-4">Everyone has to start somewhere. We are working everyday on creating more and better content. Want to beecome a contributor?</div>
                    </div>

                    <div className="py-4 sm:w-1/2 lg:w-1/3 w-1/2">
                        <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                        <p className="leading-relaxed">Data Science</p>
                    </div>
                    <div className="py-4 sm:w-1/2 lg:w-1/3 w-1/2">
                        <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                        <p className="leading-relaxed">Data Engineering</p>
                    </div>
                    <div className="py-4 sm:w-1/2 lg:w-1/3 w-1/2">
                        <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                        <p className="leading-relaxed">Software Engineering</p>
                    </div>
                    <div className="py-4 sm:w-1/2 lg:w-1/3 w-1/2">
                        <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                        <p className="leading-relaxed">Business & Finance</p>
                    </div>
                    <div className="py-4 sm:w-1/2 lg:w-1/3 w-1/2">
                        <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                        <p className="leading-relaxed">Cloud Technology</p>
                    </div>
                    <div className="py-4 sm:w-1/2 lg:w-1/3 w-1/2">
                        <h3 className="title-font font-medium text-3xl text-gray-900"></h3>
                        <p className="leading-relaxed">Blockchain</p>
                    </div>
                    <div className="w-full md:w-auto pt-8">
                        <Link href={CONTRIBUTE_PATH}>
                            <a className="p-4 btn text-center">
                                Help grow the community
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <Image src="/assets/static/landing/growing.svg" className="transform scale-90 h-full" layout="responsive" width="812" height="375" alt="stats image" />
                </div>
            </div>
        </>
    )
}
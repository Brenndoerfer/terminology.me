/* This example requires Tailwind CSS v2.0+ */
import { BeakerIcon, CurrencyDollarIcon, CloudIcon, DatabaseIcon, CodeIcon, CubeIcon } from '@heroicons/react/outline'
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import H2 from '../H2';

const features = [
    {
        name: 'Data Science',
        description: 'An interdisciplinary field that aims to extract actionable insights from data across a wide range of domains.',
        icon: BeakerIcon,
        color: 'bg-blue-600',
        href: '/data-science',
    },
    {
        name: 'Data Engineering',
        description:
            'Architecture and performant use of data systems that reliably collect and process data across an organization.',
        icon: DatabaseIcon,
        color: 'bg-red-500',
        href: '/data-engineering',
    },
    {
        name: 'Business & Finance',
        description:
            'Study, management, and creation of business processes and money with the goal to generate more value.',
        icon: CurrencyDollarIcon,
        color: 'bg-green-600',
        href: '/business-and-finance',
    },
    {
        name: 'Software Engineering',
        description:
            'Technologies and software engineering concepts brought together to build software that solves problems.',
        icon: CodeIcon,
        color: 'bg-orange-400',
        href: '/software-engineering',
    },
    {
        name: 'Cloud Technology',
        description:
            'Scalable server infrastructure and technology services that are available from anywhere in the world.',
        icon: CloudIcon,
        color: 'bg-blueGray-500',
        href: '/cloud',
    },
    {
        name: 'Blockchain',
        description:
            'Distributed ledger technology that acts like a database and as a decentralized application platform.',
        icon: CubeIcon,
        color: 'bg-warmGray-500',
        href: '/blockchain',
    },
]

export default function Domains() {
    return (
        <div className="bg-gray-50 overflow-hidden">
            <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24">
                <svg
                    className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
                </svg>

                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <H2 title="Terminology for the modern engineer" underline={false}></H2>
                    </div>
                    <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                        {features.map((feature) => (
                            <Link href={feature.href} key={feature.name} passHref={true}>
                                <div className="cursor-pointer hover:bg-white hover:border-gray-100 border border-white hover-fade rounded-lg hover:shadow-sm p-6">
                                    <dt>
                                        <div className={classNames(`flex items-center justify-center h-12 w-12 rounded-md text-white shadow-md`, feature.color)}>
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            </Link>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

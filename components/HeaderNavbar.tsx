/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    DocumentReportIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import styles from './HeaderNavbar.module.css';
import Image from 'next/Image';

const solutions = [
    {
        name: 'Data Science',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
        color: 'blue',
    },
    {
        name: 'Data Engineering',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
        color: 'red',
    },
    {
        name: 'Software Engineering',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ShieldCheckIcon,
        color: 'blue',
    },
    {
        name: 'Business & Finance',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
        color: 'blue',
    },
    {
        name: 'Cloud Technology',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
        color: 'blue',
    },

]
const resources = [
    {
        name: 'Software Engineering',
        description: 'Unit tests, blue-green deloyments, etc.',
        href: '#'
    },
    {
        name: 'Business & Finance',
        description: 'EBITDA, credit default swaps, etc.',
        href: '#',
    },
    {
        name: 'Cloud Technology',
        description: 'AWS, GCP, Azure, Databricks, etc.',
        href: '#'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderNavbar() {
    return (
        <div className="bg-white sticky top-0 z-30 border-b" id='top'>
            <div className="container mx-auto py-6 px-4 sm:px-6">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <div className="flex justify-between items-center md:justify-start md:space-x-10">
                                <div>
                                    <Link href="/"><a className="flex">
                                        <div className="flex items-center">
                                            <span className="sr-only">Terminology.me</span>
                                            <Image layout="fixed" width="48" height="48" src="/logo.png" className='h-8 sm:h-10' alt="terminology.me logo small" />
                                            <span className="ml-6 font-bold uppercase">Terminology.me</span>
                                        </div>
                                        {/* <img src="/logo.png" className='h-8 sm:h-10' alt="" />
                                        <span className="inline-block mt-1 sm:mt-2  ml-6 font-bold uppercase ">Terminology.me</span> */}
                                    </a>
                                    </Link>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                                    <Popover.Group as="nav" className="flex space-x-10">
                                        {/* <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open ? 'text-gray-900' : 'text-gray-500',
                                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                        )}
                                                    >
                                                        <span>Solutions</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl"
                                                        >
                                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                                    {solutions.map((item) => (
                                                                        <a
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                        >
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                            </div>
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                            </div>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                                <div className="p-5 bg-gray-50 sm:p-8">
                                                                    <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                                                        <div className="flex items-center">
                                                                            <div className="text-base font-medium text-gray-900">Enterprise</div>
                                                                            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                                                                New
                                                                            </span>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                            Empower your entire team with even more advanced tools.
                                                                        </p>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover> */}
                                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            Data Science
                                        </a>
                                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            Data Engineering
                                        </a>

                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            open ? 'text-gray-900' : 'text-gray-500',
                                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                        )}
                                                    >
                                                        <span>More</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
                                                        >
                                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                    {resources.map((item) => (
                                                                        <a
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                                                                        >
                                                                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    </Popover.Group>
                                    <div className="flex items-center md:ml-12">
                                        {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            Sign in
                                        </a> */}
                                        <a
                                            href="#"
                                            className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Contribute
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute -top-0 inset-x-0 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-4 pb-6 px-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Image layout="fixed" width="32" height="32" src="/logo.png" className='h-8 sm:h-10' alt="terminology.me logo small" />
                                                    <span className="ml-6 font-bold uppercase">Terminology.me</span>
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <nav className="grid gap-6">
                                                    {solutions.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                                            </div>
                                                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5">
                                            {/* <div className="grid grid-cols-2 gap-4">
                                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Pricing
                                                </a>

                                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Docs
                                                </a>

                                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Enterprise
                                                </a>
                                                {resources.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div> */}
                                            <div className="">
                                                <a
                                                    href="#"
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                >
                                                    Contribute
                                                </a>
                                                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?{' '}
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                                        Sign in
                                                    </a>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </div >
    )
}

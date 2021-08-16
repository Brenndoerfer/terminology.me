/* This example requires Tailwind CSS v2.0+ */
import { BeakerIcon, CurrencyDollarIcon, CloudIcon, DatabaseIcon, CodeIcon, CubeIcon } from '@heroicons/react/outline'
import Link from 'next/link';

const features = [
    {
        name: 'Data Science',
        description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
        icon: BeakerIcon,
        color: 'blue-600',
        href: '/data-science',
    },
    {
        name: 'Data Engineering',
        description:
            'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
        icon: DatabaseIcon,
        color: 'red-500',
        href: '/data-engineering',
    },
    {
        name: 'Business & Finance',
        description:
            'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
        icon: CurrencyDollarIcon,
        color: 'green-600',
        href: '/business-and-finance',
    },
    {
        name: 'Software Engineering',
        description:
            'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
        icon: CodeIcon,
        color: 'teal-600',
        href: '/software-engineering',
    },
    {
        name: 'Cloud Technology',
        description:
            'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
        icon: CloudIcon,
        color: 'blueGray-500',
        href: '/cloud',
    },
    {
        name: 'Blockchain',
        description:
            'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
        icon: CubeIcon,
        color: 'warmGray-500',
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
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Terminology for the modern engineer
                        </h2>
                    </div>
                    <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                        {features.map((feature) => (
                            <Link href={feature.href} key={feature.name} passHref={true}>
                                <div className="cursor-pointer hover:bg-white rounded-lg hover:shadow-sm p-6">
                                    <dt>
                                        <div className={`flex items-center justify-center h-12 w-12 rounded-md text-white bg-${feature.color} shadow-md`}>
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

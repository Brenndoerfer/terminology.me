import Link from 'next/link';
interface ICTAProps {
    title: string,
    actionText: string,
    href: string,
    children?: string,
    branded?: boolean,
}

export default function CTA(props: ICTAProps) {
    return (
        <>
            {!props.branded ? (
                <div className="bg-white">
                    <div className="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">{props.title}</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-700">
                            {props.children}
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <Link href={props.href}>
                                    <a
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        {props.actionText}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-indigo-700">
                    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            <span className="block">{props.title}</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                            {props.children}
                        </p>
                        <Link href={props.href}>
                            <a
                                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                            >
                                {props.actionText}
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

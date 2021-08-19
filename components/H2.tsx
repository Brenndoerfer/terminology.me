import styles from './H1.module.css'
import classNames from 'classnames';
import Link from 'next/link';

interface IH2Props {
    title: string,
    underline?: boolean,
    children?: React.ReactNode,
    css?: string,
}

export default function H1(props: IH2Props) {
    return (
        <>
            <div className="flex flex-wrap w-full mb-6">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-2 text-gray-900">{props.title}</h1>
                    {props.underline ? (<div className="h-1 w-20 bg-indigo-500"></div>) : ''}
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    {props.children}
                </p>
            </div>
        </>
    )
}
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
            <div className="flex flex-wrap w-full mb-10">
                <div className="w-full mb-6 lg:mb-0">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl anchor" id={props.title.toLowerCase().replace(/ /g, '-')}>{props.title}</h2>
                    {props.underline ? (<div className="h-1 w-20 bg-indigo-500"></div>) : ''}
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    {props.children}
                </p>
            </div>
        </>
    )
}
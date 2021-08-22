import styles from './H1.module.css'
import classNames from 'classnames';
import Link from 'next/link';
import overrideTailwindClassNames from '../../lib/overrideTailwind';

interface IH2Props {
    children: string,
    subtitle?: string,
    underline?: boolean,
    css?: string,
}

export default function H1(props: IH2Props) {
    return (
        <>
            <div className={overrideTailwindClassNames("flex flex-wrap w-full", "mb-6", props.css)}>
                <div className="w-full">

                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl anchor"
                        id={props.children.toLowerCase().replace(/ /g, '-')}>
                        {props.children}
                    </h2>

                    {props.underline ? (<div className="h-1 w-20 bg-indigo-500"></div>) : ''}

                </div>

                {props.subtitle ? (
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        {props.subtitle}
                    </p>
                ) : ''}
            </div>
        </>
    )
}
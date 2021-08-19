import styles from './H1.module.css'
import classNames from 'classnames';
import Link from 'next/link';

interface IH1Props {
    children?: string,
    css?: string,
    backHref?: string
}

export default function H1(props: IH1Props) {
    return (
        <>
            <div className={classNames(styles.h1, 'mb-6 sm:mb-12', 'anchor')}>
                <h1 id={props.children?.toString().toLowerCase().replace(/ /g, '-')}>{props.children}</h1>
                <div className="mt-1 h-2 w-20 bg-indigo-500"></div>
                {
                    props.backHref ? (
                        <>
                            <Link href={props.backHref}>
                                <a>
                                    <div className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                        </svg>
                                        <span className="text-lg">Back</span>
                                    </div>
                                </a>
                            </Link>
                        </>
                    ) : ('')
                }
            </div>
        </>
    )
}
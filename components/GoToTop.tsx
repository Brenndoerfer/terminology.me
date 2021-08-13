import Link from 'next/link';
import classNames from 'classnames';
import styles from './GoToTop.module.css'
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline'

export default function GoToTop() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Link href='#top' scroll={true}>
                <a className={classNames(styles.scrollTopBtn, { [styles.showScrollTopBtn]: scrollPosition > 200 })} title="Go to top">
                    <ArrowUpIcon className="inline text-white h-6" />

                </a>
            </Link>
        </>
    )
}
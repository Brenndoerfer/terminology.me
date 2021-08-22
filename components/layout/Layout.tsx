import dynamic from 'next/dynamic';
import HeaderNavbar from '../shared/HeaderNavbar';
import HeadMeta from '../shared/HeadMeta';
import classNames from 'classnames';
const Footer = dynamic(() => import('../shared/Footer'))
const GoToTop = dynamic(() => import('../shared/GoToTop'))

//{ title, children }: { title: string, children: React.ReactNode }
export default function Layout(props) {
    return (
        <>
            <HeadMeta title={props.title} term={props.term} />
            <HeaderNavbar />
            <div id='top'></div>

            <div className={classNames("bg-gray-50")} >
                {props.children}
            </div>
            <Footer />
            <GoToTop />
        </>
    )
}
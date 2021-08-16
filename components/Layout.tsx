import dynamic from 'next/dynamic';
import { LayoutProps } from './Layout.interface';
import HeaderNavbar from './HeaderNavbar';
import HeadMeta from './HeadMeta';
const Footer = dynamic(() => import('./Footer'))
const GoToTop = dynamic(() => import('./GoToTop'))

//{ title, children }: { title: string, children: React.ReactNode }
export default function Layout(props) {
    return (
        <>
            <HeadMeta title={props.title} term={props.term} />
            <HeaderNavbar />
            <div className="bg-gray-50">
                {props.children}
            </div>
            <Footer />
            <GoToTop />
        </>
    )
}
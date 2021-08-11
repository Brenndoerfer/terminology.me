import { LayoutProps } from './Layout.interface';
import HeaderNavbar from './HeaderNavbar';

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-gray-50">

            {children}
        </div>
    )
}
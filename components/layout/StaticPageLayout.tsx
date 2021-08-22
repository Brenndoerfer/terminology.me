import classNames from "classnames";
import { overrideTailwindClasses as otc } from 'tailwind-override'
interface IStaticPageLayoutProps {
    children: React.ReactNode,
    css?: string,
}

export default function StaticPageLayout(props: IStaticPageLayoutProps) {
    return (
        <>
            <div className={otc(classNames('container mx-auto shdaow-lg', 'py-6 sm:py-12', props.css))}>
                {props.children}
            </div>
        </>
    )
}
import classNames from "classnames";

interface IStaticPageLayoutProps {
    children: React.ReactNode,
    css?: string,
}

export default function StaticPageLayout(props: IStaticPageLayoutProps) {
    return (
        <>
            <div className={classNames(!props.css ? 'py-6 sm:py-12' : props.css, 'px-4 sm:px-6')}>
                <div className={classNames('container mx-auto  shdaow-lg')}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
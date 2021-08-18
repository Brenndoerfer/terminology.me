import classNames from "classnames";

export default function StaticPageLayout(props) {
    return (
        <>
            <div className={classNames(props.css, '')}>
                <div className={classNames('container mx-auto px-4 sm:px-6 py-6 sm:py-12 shdaow-lg')}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
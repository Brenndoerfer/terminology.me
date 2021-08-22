import classNamesOriginal from "classnames";
import { overrideTailwindClasses } from "../../lib/overrideTailwind";

type SizeTypes = 'sm' | 'md' | 'lg';

interface IContainerProps {
    children: React.ReactNode,
    css?: string,
    size?: SizeTypes,
}

function getSize(size: SizeTypes | undefined): string {

    let defaultSize = 'py-10 sm:py-20'

    if (!size) return defaultSize

    switch (size) {
        case "sm": return defaultSize;
        case "md": return "py-10 sm:py-20";
        case "lg": return "py-16 sm:py-24";
        default: return defaultSize;
    }
}


export default function Container(props: IContainerProps) {
    return (
        <>
            <section>

                <div className={
                    overrideTailwindClasses(
                        classNamesOriginal(
                            'container mx-auto px-4 sm:px-6',
                            getSize(props.size),
                            props.css
                        )
                    )
                }
                >
                    {props.children}
                </div>
            </section>
        </>
    )
}
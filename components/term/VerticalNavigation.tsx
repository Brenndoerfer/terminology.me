import classNames from "classnames"
import { ITerm } from "../../lib/loaderInterface"
import { useState, useEffect, SetStateAction, Dispatch, useRef } from 'react';

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Documents', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]


function extractHeadings(content: string) {

    const headlineFilter = /(#{2,6})\s+(\w.*)/g
    const headlinesAll = [...content.matchAll(headlineFilter)]
    const headlines = headlinesAll.map(item => (
        {
            level: item[1].length,
            name: item[2],
            href: '#' + item[2].toLowerCase().trim().replace(/ /g, '-'),
            current: false,
        }
    ))
    return headlines

}

interface IVerticalNavigationProps {
    term: ITerm
}

export default function VerticalNavigation(props: IVerticalNavigationProps) {

    // const definitionHeader = `## Definition of ${props.term.data.title}`;
    const headings = extractHeadings(props.term.content)
    headings[0].current = true;
    // console.log(headings)

    const [activeId, setActiveId] = useState<number>();
    useIntersectionObserver(setActiveId);

    return (
        <>
            <div className="text-2xl font-bold">Content</div>
            <div className="h-1 w-10 bg-indigo-500 mb-4"></div>
            <nav className="space-y-1" aria-label="Sidebar">
                {headings.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-indigo-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                            'flex items-center px-3 py-2 text-sm font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        <span className="truncate">{item.name}</span>
                    </a>
                ))}
            </nav>


        </>
    )
}

const useIntersectionObserver = (setActiveId: Dispatch<SetStateAction<number | undefined>>) => {

    const headingElementsRef = useRef({});

    useEffect(() => {
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current); he

            const visibleHeadings = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
            });

            const getIndexFromId = (id) =>
                headingElements.findIndex((heading) => heading.id === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: "0px 0px -40% 0px"
        });

        const headingElements = Array.from(document.querySelectorAll("h2, h3"));

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId]);
};
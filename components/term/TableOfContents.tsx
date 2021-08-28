import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { ITerm } from "../../lib/loaderInterface";
import styles from './TableOfContents.module.css'

// const getNestedHeadings = (headingElements) => {
//     const nestedHeadings = [];

//     headingElements.forEach((heading, index) => {
//         const { innerText: title, id } = heading;

//         if (heading.nodeName === "H2") {
//             nestedHeadings.push({ id, title, items: [] });
//         } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
//             nestedHeadings[nestedHeadings.length - 1].items.push({
//                 id,
//                 title,
//             });
//         }
//     });

//     return nestedHeadings;
// };

function extractHeadings(content: string) {

    const headlineFilter = /(#{2,6})\s+(\w.*)/g
    const headlinesAll = [...content.matchAll(headlineFilter)]
    const headlines = headlinesAll.map(item => (
        {
            level: item[1].length,
            title: item[2],
            id: item[2].toLowerCase().trim().replace(/ /g, '-'),
            // current: false,
        }
    ))
    return headlines

}

const useHeadingsData = (term: ITerm) => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        // const headingElements = Array.from(
        //     document.querySelectorAll("h2, h3")
        // );

        // const newNestedHeadings = getNestedHeadings(headingElements);

        const newNestedHeadings = extractHeadings(term.content)
        setNestedHeadings(newNestedHeadings);

    }, []);

    return { nestedHeadings };
};

const Headings = ({ headings, activeId }) => (
    // <ul className={styles.toc}>
    //     {headings.map((heading) => (
    //         <li key={heading.id} className={heading.id === activeId ? styles.active : ""}>
    //             <a href={`#${heading.id}`} className={styles.title}>{heading.title}</a>
    //             {heading.items.length > 0 && (
    //                 <ul>
    //                     {heading.items.map((child) => (
    //                         <li key={child.id} className={child.id === activeId ? styles.active : ""}>
    //                             <a href={`#${child.id}`}>{child.title.toLowerCase()}</a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             )}
    //         </li>
    //     ))}
    // </ul>
    <div>

        {headings.map((item) => (
            <a
                key={item.id}
                href={`#${item.id}`}
                className={classNames(
                    item.id == activeId ? 'bg-indigo-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md'
                )}
                aria-current={item.current ? 'page' : undefined}
            >
                <span className="truncate">{item.title}</span>
            </a>
        ))}
    </div>
);

const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef({});
    useEffect(() => {
        const callback = (headings) => {

            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);

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
            rootMargin: "-100px 0px 40% 0px"
        });

        const headingElements = Array.from(document.querySelectorAll("h2, h3"));

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId]);
};


interface ITableOfContentsProp {
    term: ITerm
}

export default function TermTableOfContents(props: ITableOfContentsProp) {

    const [activeId, setActiveId] = useState();
    const nestedHeadings = extractHeadings(props.term.content)
    useIntersectionObserver(setActiveId);

    // const { nestedHeadings } = useHeadingsData(props.term);
    // const [nestedHeadings, setNestedHeadings] = useState([]);

    // useEffect(() => {
    //     // const headingElements = Array.from(
    //     //     document.querySelectorAll("h2, h3")
    //     // );

    //     // const newNestedHeadings = getNestedHeadings(headingElements);

    //     const newNestedHeadings = extractHeadings(term.content)
    //     setNestedHeadings(newNestedHeadings);

    // }, []);



    return (
        <>
            <div className="text-2xl font-bold">Content</div>
            <div className="h-1 w-10 bg-indigo-500 mb-4"></div>
            <nav aria-label="Table of contents">
                <Headings headings={nestedHeadings} activeId={activeId} />
            </nav>

        </>
    )
}
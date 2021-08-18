import { IAuthor } from "../lib/loaderInterface"
import Link from 'next/link';
import Image from 'next/image';
import { AUTHORS_PATH } from "../lib/constants";
import CTA from './CTA';

interface IAuthorsProp {
    authors: IAuthor[];
}

export default function Authors(props: IAuthorsProp) {
    return (
        <>
            <div className="flex flex-wrap -m-2">
                {props.authors.map(author => {
                    return (
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={author.slug}>
                            <Link href={`${AUTHORS_PATH}/${author.slug}`}>
                                <a>
                                    <div
                                        className="h-full flex items-center text-lg border-gray-200 border p-4 rounded-lg bg-white
                                        hover:shadow-sm hover:bg-indigo-700 transition duration-300 ease-in-out font-medium text-gray-800 hover:text-white">
                                        {author.img ? (
                                            <div className="w-16 h-16 mr-4">
                                                <Image src={author.img} layout="responsive" width={80} height={80} alt={`${author.firstname} ${author.lastname} profile image`} className="rounded-full" />
                                            </div>
                                        ) : (
                                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                        )}
                                        <div className="flex-grow">
                                            <h2>{author.firstname} {author.lastname}</h2>
                                            {/* <p className="text-gray-500">Title</p> */}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
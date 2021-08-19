import { IAuthor } from '../lib/loaderInterface';
import Image from 'next/image'
import Link from 'next/link';
import { AiFillMail, AiFillHome, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
import CTA from './CTA';

interface IAuthorComponent {
    author: IAuthor;
}

export default function AuthorComponent(props: IAuthorComponent) {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col">
                    <div className="w-full lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-4 items-center">
                            <div className="w-1/2 sm:w-1/3 text-center sm:pr-8">
                                {props.author.img && props.author.img.length > 0 ? (
                                    <Image
                                        layout="responsive"
                                        width="100%"
                                        height="100%"
                                        src={props.author.img}
                                        alt={`${props.author.firstname} ${props.author.lastname}`}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <img alt="team" className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/400x400" />
                                )}

                                <div className="visible text-center md:invisible mt-4 mb-2">

                                    {props.author.email ? (
                                        <Link href={`mailto:${props.author.email}`}>
                                            <a target="_blank">
                                                <AiFillMail size="1.5em" className="text-black inline mx-1" />
                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.homepage ? (
                                        <Link href={props.author.homepage}>
                                            <a target="_blank">
                                                <AiFillHome size="1.5em" className="text-black inline mx-1" />

                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.linkedin ? (
                                        <Link href={props.author.linkedin}>
                                            <a target="_blank">
                                                <AiFillLinkedin size="1.5em" className="text-black inline mx-1" />
                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.github ? (
                                        <Link href={props.author.github}>
                                            <a target="_blank">
                                                <AiFillGithub size="1.5em" className="text-black inline mx-1" />
                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.stackoverflow ? (
                                        <Link href={props.author.stackoverflow}>
                                            <a target="_blank">
                                                <FaStackOverflow size="1.5em" className="text-black inline mx-1" />
                                            </a>
                                        </Link>
                                    ) : ''}
                                </div>

                                {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"> */}
                                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg> */}
                                {/* </div> */}
                                <div className="flex flex-col items-center text-center justify-center">
                                    {/* <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{props.author.firstname} {props.author.lastname}</h2> */}
                                    {/* <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div> */}
                                    {/* <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-left">
                                <h3 className="text-2xl font-bold mb-4">Profile</h3>
                                <p className="leading-relaxed text-lg mb-4">
                                    {props.author.profile ? props.author.profile : "No profile information available"}
                                </p>
                                <div className="invisible text-left md:visible">

                                    {props.author.email ? (
                                        <Link href={`mailto:${props.author.email}`}>
                                            <a target="_blank">
                                                <AiFillMail size="1.5em" className="text-black inline mr-2" />
                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.homepage ? (
                                        <Link href={props.author.homepage}>
                                            <a target="_blank">
                                                <AiFillHome size="1.5em" className="text-black inline mr-2" />

                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.linkedin ? (
                                        <Link href={props.author.linkedin}>
                                            <a target="_blank">
                                                <AiFillLinkedin size="1.5em" className="text-black inline mr-2" />
                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.github ? (
                                        <Link href={props.author.github}>
                                            <a target="_blank">
                                                <AiFillGithub size="1.5em" className="text-black inline mr-2" />
                                            </a>
                                        </Link>
                                    ) : ''}

                                    {props.author.stackoverflow ? (
                                        <Link href={props.author.stackoverflow}>
                                            <a target="_blank">
                                                <FaStackOverflow size="1.5em" className="text-black inline mr-2" />
                                            </a>
                                        </Link>
                                    ) : ''}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
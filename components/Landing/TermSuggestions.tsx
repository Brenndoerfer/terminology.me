import classNames from 'classnames';

interface TermSuggestionsProp {
    title: string,
    css?: string
}

export default function TermSuggestions({ title, css }: TermSuggestionsProp) {
    return (
        <>
            <section className={classNames('text-gray-600 body-font ', css)}>
                <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
                    {/* <div className="flex flex-col mb-4">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500"></div>
                        </div>
                    </div> */}

                    <div className="flex flex-wrap w-full mb-6">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-2 text-gray-900">{title}</h1>
                            {/* <div className="h-1 w-20 bg-indigo-500 rounded"></div> */}
                        </div>
                        {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-blue-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium uppercase">Data Science</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-green-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                                <h3 className="tracking-widest text-indgo-500 text-xs font-medium uppercase">Finance</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-red-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">Data Engineering</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-indigo-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
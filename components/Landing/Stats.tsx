export default function Stats() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-extrabold sm:text-4xl text-3xl mb-2 text-gray-900">We are growing</h1>
                            <div className="leading-relaxed">Everyone has to start somewhere. We are working everyday on creating more and better content. Want to beecome a contributor?</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">5</h2>
                            <p className="leading-relaxed">Data Science</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">11</h2>
                            <p className="leading-relaxed">Data Engineering</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">3</h2>
                            <p className="leading-relaxed">Software Engineering</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Business & Finance</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">9</h2>
                            <p className="leading-relaxed">Cloud Technology</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="transform scale-75 h-full" src="/assets/static/landing/growing.svg" alt="stats" />
                    </div>
                </div>
            </section>
        </>
    )
}
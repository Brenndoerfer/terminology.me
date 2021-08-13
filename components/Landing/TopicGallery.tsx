import classNames from 'classnames'
import styles from './TopicGallery.module.css'

export default function TopicGallery() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap px-4 sm:px-6 py-16 sm:py-24">
                    <div className="flex w-full mb-12 md:mb-24 flex-wrap">
                        <h1 className="sm:text-4xl text-3xl font-extrabold text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Terminology Topics</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg">
                            Learn terminology by topics. There is no faster way to get yourself up to speed with a topic than this.
                        </p>
                    </div>

                    <div className={classNames("flex flex-wrap w-full", styles.galleryHeight)}>
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="w-1/2  h-1/3 bg-red-300"></div>
                            <div className="w-1/2 h-1/3 bg-blue-300 "></div>
                            <div className="w-full h-2/3 bg-green-700"></div>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="w-full h-2/3 bg-green-300"></div>
                            <div className="w-1/2  h-1/3 bg-red-300"></div>
                            <div className="w-1/2 h-1/3 bg-blue-300 "></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
import styles from './Hero.module.css'
import { components } from 'react-select';
import { useWindowSize } from '../../lib/layout';
import Learn from '../../public/assets/static/landing/learn.svg';
import Image from 'next/image';
import SelectSearch from '../SelectSearch';
import Typewriter from 'typewriter-effect';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


export default function Hero({ searchOptions }) {

    // const size = useWindowSize();


    const customStyles = {
        // option: (provided, state) => ({
        //     ...provided,
        //     padding: 12,
        // }),
        control: (provided, state) => ({
            ...provided,
            padding: 12,
            //     paddingTop: 12,
            //     paddingBottom: 12,
            //     fontSize: 20
        })
    }

    return (
        <>
            <section className="bg-white">

                <div className="container mx-auto flex px-5 md:flex-row flex-col py-16 md:py-24">

                    <div className="mx-auto w-full xl:w-4/6 flex flex-col md:items-start md:text-left  text-center">

                        {/* https://www.npmjs.com/package/typewriter-effect */}
                        <div className="title-font sm:text-4xl mb-8 lg:mb-0 md text-3xl font-serif font-extrabold text-gray-900 mx-auto">
                            {/* Terminology.me */}
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('What is...')
                                        .pauseFor(500)
                                        .deleteChars(3)
                                        .changeDeleteSpeed(10)

                                        .typeString(' XGBoost?')
                                        .pauseFor(1500)
                                        .deleteChars(9)

                                        .typeString(' Apache Spark?')
                                        .pauseFor(1500)
                                        .deleteChars(13)

                                        .typeString(' EBITDA?')
                                        .pauseFor(1500)
                                        .changeDeleteSpeed(1)
                                        .deleteAll()

                                        .typeString('Terminology.me')
                                        .start();
                                }}
                            />
                            <br className="hidden lg:inline-block" />
                        </div>

                        <SelectSearch options={searchOptions} styles={customStyles} css='w-full mb-4'></SelectSearch>
                        <h1 className="leading-relaxed w-full text-center text-gray-600">
                            Compact and easy to understand explanations for the modern, cross-functional engineer
                        </h1>

                        {/* <div className="flex flex-wrap mt-8 justify-center mx-auto">
                            <div><button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Random Term</button></div>
                            <div><button className="ml-4  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Glossary</button></div>
                        </div> */}
                    </div>


                </div>
            </section>
        </>
    )
}
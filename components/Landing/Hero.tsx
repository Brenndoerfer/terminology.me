import styles from './Hero.module.css'
import Select, { components } from 'react-select';
import { useWindowSize } from '../../lib/layout';
import Learn from '../../public/assets/static/landing/learn.svg';
import Image from 'next/image';

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

                <div className="container mx-auto flex px-5 md:flex-row flex-col py-24">

                    <div className="mx-auto md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 mt-4  text-center">

                        {/* https://www.npmjs.com/package/typewriter-effect */}
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 mx-auto">Terminology.me
                            <br className="hidden lg:inline-block" />
                        </h1>

                        <div className="mb-4 mt-8 leading-relaxed w-full text-center text-lg">
                            Compact and easy to understand explanations of a modern engineers' terminology
                        </div>

                        <Select options={searchOptions} className="w-full" styles={customStyles} placeholder='I want to learn about ...' inputId='landing-search' />

                        <div className="flex flex-wrap mt-8 justify-center mx-auto">
                            {/* <div><button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Random Term</button></div>
                            <div><button className="ml-4  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Glossary</button></div> */}
                        </div>
                    </div>

                    {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto"> */}
                    {/* <Image src='/../public/assets/static/landing/learn.png' blurDataURL='/../public/assets/static/landing/learn.png' placeholder='blur' layout='responsive' width="100%" height="50%" /> */}
                    {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
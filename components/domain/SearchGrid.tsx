import Link from 'next/link';
import { GLOSSARY_PATH } from '../../lib/constants';
import { domainHrefToLongname } from '../../lib/transformer';
import SelectSearch from '../modular/SelectSearch';
import { ISearchOptions } from '../modular/SelectSearchInterface';

interface ISearchGridProps {
    searchOptions: ISearchOptions[]
    domainHref?: string,
}

export default function SearchGrid(props: ISearchGridProps) {

    const customStyles = {
        // option: (provided, state) => ({
        //     ...provided,
        //     padding: 12,
        // }),
        control: (provided, state) => ({
            ...provided,
            padding: 12,
            borderColor: '#ddd',
            //     paddingTop: 12,
            //     paddingBottom: 12,
            //     fontSize: 20
        })
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
            {/* <div className="bg-indigo-500 h-40 col-span-2"></div> */}

            <div className="lg:col-span-2">
                <SelectSearch options={props.searchOptions} styles={customStyles}></SelectSearch>
            </div>
            <Link href={`${GLOSSARY_PATH}` + (props.domainHref ? `/${props.domainHref}` : '')}>
                <a className="">
                    <div className="btn w-full p-4 lg:h-full flex items-center justify-center border ">All {domainHrefToLongname(props.domainHref)} Terms</div>
                </a>
            </Link>

        </div>
    )
}
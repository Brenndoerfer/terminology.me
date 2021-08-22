// todo interface
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import Select from 'react-select';
import { platformShortcut, handleEsc } from '../../lib/platform';
import classNames from 'classnames';
import { TERM_PATH } from '../../lib/constants';

interface SelectSearchProps {
    options: { value: string, label: string }[],
    styles?: any,
    css?: string,
    inputId?: string,
}

export default function SelectSearch({ options, styles, css, inputId }: SelectSearchProps) {


    const defaultStyles = {
        // option: (provided, state) => ({
        //     ...provided,
        //     padding: 12,
        // }),
        control: (provided, state) => ({
            ...provided,
            borderRadius: 2,
            fontColor: 'black',
            fontSize: 15,
            borderColor: 'none',
            boxShadow: ' 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);'
        }),
        // input: (provided, state) => ({
        //     ...provided,
        //     borderRadius: '0%'
        // }),
        // multiValue: (styles) => ({
        //     ...styles,
        //     backgroundColor: blue,
        //     borderRadius: "50%",
        // }),

    }

    const id = inputId || 'landing-search'
    const classes = css || ''
    const customStyles = { ...defaultStyles, ...styles }
    const searchFieldRef = useRef(null);
    const router = useRouter()
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isLoading, setLoadingState] = useState(false);


    const handleChange = value => {
        let url = `${TERM_PATH}/${value.value}`
        setLoadingState(true);
        router.push(url, undefined, { shallow: false })
        setTimeout(() => setLoadingState(false), 2500) // TODO: change to more robust URL onChange
    }

    const handleShortcut = () => {
        searchFieldRef?.current?.focus()
    }

    useHotkeys('cmd+k', handleShortcut);
    useHotkeys('ctrl+k', handleShortcut);
    useEffect(() => handleEsc(searchFieldRef), []);


    return (
        <>
            <Select
                options={options}
                ref={searchFieldRef}
                isLoading={isLoading}
                className={classNames(classes, 'rounded-sm')}
                styles={customStyles}
                placeholder={'I want to learn about ... ' + platformShortcut()}
                inputId={id}
                onChange={handleChange}
                openMenuOnFocus={true}
            />
        </>
    )
}
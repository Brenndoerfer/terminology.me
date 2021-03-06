import classNames from 'classnames';
import Link from 'next/link';
import { MAILCHIMP_SUBSCRIBE_URL } from '../../lib/constants';
import newsletterStyles from '../landing/Newsletter.module.css'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
const navigation = {
    solutions: [
        { name: 'Data Science', href: '/data-science' },
        { name: 'Data Engineering', href: '/data-enginering' },
        { name: 'Software Engineering', href: '/software-engineering' },
        { name: 'Business & Finance', href: '/finance' },
        { name: 'Cloud Technology', href: '/cloud' },
        { name: 'Blockchain', href: '/blockchain' },
    ],
    support: [
        { name: 'About', href: '/about' },
        { name: 'How to Contribute', href: '/contribute' },
        { name: 'Authors', href: '/authors' },
        { name: 'Glossary', href: '/glossary' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        // { name: 'Buy me a coffee', href: '#' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy', href: '/privacy' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/terminology.me',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/terminology.me/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        // {
        //     name: 'Twitter',
        //     href: '#',
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        //         </svg>
        //     ),
        // },
        {
            name: 'GitHub',
            href: 'https://github.com/Brenndoerfer/terminology.me',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/terminology-me/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 512 512" {...props}>
                    <path
                        fill="evenodd"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        clipRule="evenodd" />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    return (
        <>
            <footer className="bg-white border-t" aria-labelledby="footerHeading">
                <h2 id="footerHeading" className="sr-only">
                    Footer
                </h2>
                <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Domains</h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.solutions.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href}>
                                                    <a className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.support.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href}>
                                                    <a className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                {/* <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.company.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Other</h3>
                                    <ul className="mt-4 space-y-4">
                                        {navigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href}>
                                                    <a className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 xl:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mt-4 text-base text-gray-500">
                                The latest news, articles, and resources
                            </p>
                            <form action={MAILCHIMP_SUBSCRIBE_URL} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate mt-4 sm:flex sm:max-w-lg" target="_blank" noValidate={false}>
                                <label htmlFor="emailAddress" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    id="mce-EMAIL"
                                    autoComplete="email"
                                    required
                                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                                    placeholder="Enter your email ..."
                                />
                                <div className={classNames(newsletterStyles.footerOffset, 'w-0')} aria-hidden="true">
                                    <input type="text" name="b_b9ae82b0a6fafbc07c69e34e8_3ac7447e35" tabIndex={-1} value="" onChange={() => null} />
                                </div>
                                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <input
                                        type="submit"
                                        className="btn w-full bg-indigo-600 flex items-center justify-center py-2 px-4 "
                                        name="subscribe"
                                        id="mc-embedded-subscribe"
                                        value="Subscribe"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="border-t">
                <div className="container mx-auto">
                    <div className="border-gray-200 pt-8 md:flex md:items-center md:justify-between p-8 my-8">
                        <div className="flex space-x-6 md:order-2">
                            {navigation.social.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <a target="_blank" className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </Link>
                            ))}
                        </div>
                        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                            &copy; 2021 <Link href="/#">Terminology.me</Link> - All rights reserved. Created by <Link href="https://michaelbrenndoerfer.com"><a target="_blank">Michael Brenndoerfer</a></Link>.
                        </p>

                    </div>
                </div>
            </div>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-WG49HJC07Y"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-WG49HJC07Y');`}} />

        </>
    )
}

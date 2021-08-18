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


import classNames from 'classnames';
import { MAILCHIMP_SUBSCRIBE_URL } from '../../lib/constants';
import styles from './Newsletter.module.css'
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function Newsletter() {

    return (
        <div className="bg-white">
            <div className="container mx-auto lg:flex lg:items-center px-4 sm:px-6 py-16 sm:py-24">

                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-500">
                        The latest news, articles, and resources
                    </p>
                </div>

                <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/2 ">
                    <div className={styles.mc_embed_signup}>
                        <form action={MAILCHIMP_SUBSCRIBE_URL} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate sm:flex" target="_blank" noValidate={false}>
                            <label htmlFor="emailAddressNewsletterContent" className="sr-only">Email address</label>
                            <input
                                id="mce-EMAIL"
                                name="EMAIL"
                                type="email"
                                autoComplete="email"
                                required
                                className="email w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                placeholder="Enter your email ..."
                            />
                            <div className={classNames(styles.footerOffset, 'w-0')} aria-hidden="true">
                                <input type="text" name="b_b9ae82b0a6fafbc07c69e34e8_3ac7447e35" tabIndex={-1} value="" onChange={() => null} />
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <input
                                    type="submit"
                                    className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    value="Subscribe"
                                />

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

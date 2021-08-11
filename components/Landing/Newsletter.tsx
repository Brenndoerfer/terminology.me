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
export default function Newsletter() {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:py-24 lg:px-6 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-500">
                        Get important updates and monthly digests. We will not spam you. Promised.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <form className="sm:flex">
                        <label htmlFor="emailAddress" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="emailAddress"
                            name="emailAddress"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  rounded-md"
                            placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Keep me updated
                            </button>
                        </div>
                    </form>
                    {/* <p className="mt-3 text-sm text-gray-500">
                        We care about the protection of your data. Read our{' '}
                        <a href="#" className="font-medium underline">
                            Privacy Policy.
                        </a>
                    </p> */}
                </div>
            </div>
        </div>
    )
}

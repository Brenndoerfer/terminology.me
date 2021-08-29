const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        options: {
            safelist: [
                'border-red-100',
                'border-blue-100',
                'border-green-100',
                'border-red-100',
                'border-orange-100',
                'border-blueGray-100',
                'border-warmGray-100',
                'border-red-300',
                'border-blue-300',
                'border-green-300',
                'border-red-300',
                'border-orange-300',
                'border-blueGray-300',
                'border-warmGray-300',
                'hover:border-red-300',
                'hover:border-blue-300',
                'hover:border-green-300',
                'hover:border-red-300',
                'hover:border-orange-300',
                'hover:border-blueGray-300',
                'hover:border-warmGray-300',
                'border-red-500',
                'border-blue-500',
                'border-green-500',
                'border-red-500',
                'border-orange-500',
                'border-blueGray-500',
                'border-warmGray-500',
                'text-red-600',
                'text-blue-600',
                'text-green-600',
                'text-red-600',
                'text-orange-600',
                'text-blueGray-600',
                'text-warmGray-600',
            ]
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            black: '#000',
            white: '#fff',
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            teal: colors.teal,
            green: colors.green,
            blue: colors.blue,
            blueGray: colors.blueGray,
            warmGray: colors.warmGray,
            rose: colors.rose,
            orange: colors.orange,

        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
}

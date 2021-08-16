const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
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

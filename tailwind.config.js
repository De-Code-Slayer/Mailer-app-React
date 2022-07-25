/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#282c34'
            },
            fontFamily: {
                'popins': ['"Poppins"', 'sans-serif'],
              },
        },
        
    },
    plugins: [],
}

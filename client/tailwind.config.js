/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                blob: "blob 14s infinite",
                blob2: "blob2 24s infinite",
                blob3: "blob3 14s infinite"
            },

            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                    "33%": {
                        transform: "translate(30px , -50px) scale(1.1)"
                    },
                    "66%": {
                        transform: "translate(120px ,20px) scale(0.9)"
                    },
                    "100%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                },
                blob2: {
                    "0%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                    "25%": {
                        transform: "translate(-100px , 50px) scale(1.1)"
                    },
                    "50%": {
                        transform: "translate(-200px , 200px) scale(1)"
                    },
                    "75%": {
                        transform: "translate(-100px ,100px) scale(0.9)"
                    },
                    "100%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                },
                blob3: {
                    "0%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                    "33%": {
                        transform: "translate(40px , -50px) scale(1.1)"
                    },
                    "66%": {
                        transform: "translate(-100px ,-20px) scale(0.9)"
                    },
                    "100%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                },
            },
        },
    },
    plugins: [],
};

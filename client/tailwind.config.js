/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                blob: "blob 7s infinite",
                blob2: "blob2 7s infinite",
                blob3: "blob3 7s infinite"
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
                        transform: "translate(-20px ,20px) scale(0.9)"
                    },
                    "100%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                },
                blob2: {
                    "0%": {
                        transform: "translate(0px ,0px) scale(1)"
                    },
                    "33%": {
                        transform: "translate(-20px , -20px) scale(1.1)"
                    },
                    "66%": {
                        transform: "translate(-30px ,-10px) scale(0.9)"
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
                        transform: "translate(-50px ,-20px) scale(0.9)"
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

import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                fadein: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            animation: {
                fadein: "fadein 1s ease var(--fadein-delay, 0) forwards",
                text: "text 5s ease infinite",
                textfadein:
                    "fadein 1s ease var(--fadein-delay, 0) forwards, text 5s ease infinite",
            },
        },
    },

    plugins: [forms],
};

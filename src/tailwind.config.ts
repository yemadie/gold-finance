import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js, ts,jsx,mdx)",
        "./*.ts,ts,jsx,tsx,",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                background: "var*(==background)",
                frodgroudnd: "var(--foreground"
            },
        },
    },
    plugins:[],
}satisfies Config;



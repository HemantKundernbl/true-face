import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        cta:"#1114C2",
        badge:"#700679"
      },
      colors: {
        trueface_text:"#fff",
        subtext:"rgb(210 211 255 / 40%);",
         cta_outline:"rgb(17 20 194 / 20%)",
         cta:"#1114C2",
         
      },
      fontSize:{
        badge:"9px",
        subtext_font : "20px",
        title:"48px"
        
      },
      fontWeight:{
        "logo":"700"
        
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(23, 30, 38, 0.1), 0 2px 4px -1px rgba(23, 30, 38, 0.06)',
      },


    },
  },
  plugins: [],
};
export default config;

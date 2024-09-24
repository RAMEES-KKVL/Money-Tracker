/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens : {
        "xs" : "390px",
        "sm" : "640px",
        "md" : "868px",
        "lg" : "1004px",
        "xl" : "1138px",
        "2xl" : "1536px",
        "xs_max" : { max : "390px" },
        "sm_max" : { max : "640px" },
        "md_max" : { max : "868px" },
        "lg_max" : { max : "1004px" },
        "xl_max" : { max : "1138px" },
        "2xl_max" : { max : "1536px" }
      }
    },
  },
  plugins: [],
}


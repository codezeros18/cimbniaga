// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // NOTE: Update this to include the paths to all files that contain Nativewind classes.
//   content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {
//       colors: {
//         'cimb-red': '#C8102E',
//         'cimb-bg': '#F9F5F4',
//         'cimb-dark': '#1A1A1A',
//       },
//       fontFamily: {
//         poppins: ['Poppins-Regular'],
//         'poppins-semibold': ['Poppins-SemiBold'],
//         'poppins-medium': ['Poppins-Medium'],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'cimb-red': '#C8102E',
        'cimb-bg': '#F9F5F4',
        'cimb-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
};


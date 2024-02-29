/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  // make sure to safelist these classes when using purge
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],

  
  
  
  theme: {
    
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
      },
      screens: {
        sm:  '425px',
        md:  '768px',
        lg:  '1440px',
      },
    }, 
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}


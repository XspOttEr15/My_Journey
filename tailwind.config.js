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

  // enable dark mode via class strategy
  darkMode: 'class',
  
  
  theme: {
    
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
      },
      screens: {
        ssm: '375px',
        sm:  '480px',
        md:  '768px',
        lg:  '976px',
        lgg: '1024px',
        xl:  '1440px',
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xxxl: "max-w-[1920px]"
      },
    }, 
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}


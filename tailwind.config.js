module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        'musikhuset': {
           'primary' : '#221BF2',
           'primary-focus' : '#0a04ae',
           'primary-content' : '#ffffff',
  
           'secondary' : '#ffffff',
           'secondary-focus' : '#ced3d9',
           'secondary-content' : '#01020F',
  
           'accent' : '#ffff63',
           'accent-focus' : '#f9e824',
           'accent-content' : '#01020F',
  
           'neutral' : '#3b424e',
           'neutral-focus' : '#01020f',
           'neutral-content' : '#ffffff',
  
           'base-100' : '#ffffff',
           'base-200' : '#f9fafb',
           'base-300' : '#ced3d9',
           'base-content' : '#01020F',
  
           'info' : '#ffffff',
           'success' : '#221BF2',
           'warning' : '#f9e824',
           'error' : '#01020F',
  
          '--rounded-box': '0.8rem',          
          '--rounded-btn': '0.4rem',        
          '--rounded-badge': '1rem',      
  
          '--animation-btn': '0.5s',       
          '--animation-input': '0.2s',       
  
          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '0.3rem',      
          '--border-btn': '3px',            
        },}
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require('daisyui'),],
};


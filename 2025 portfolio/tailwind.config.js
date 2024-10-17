/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./shopify-tax.html", "./visualization.html", "./style.css"],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['Denim', 'ui-sans-serif', 'system-ui'],
        'serif': ['Ntype', 'Georgia'],
        'mono': ['Forma', 'SFMono-Regular'],
        'display': ['Ntype', 'ui-serif', 'Georgia'],
        'body': ['Denim', "Open Sans"],
        'ui': ['Inter', "Open Sans"]
      },
      fontSize: {
        'sm': ['0.875rem', '1.15rem' ],
        'base': ['1rem', '1.25rem' ],
        'lg': ['1.125rem', '1.5rem' ],
        'xl': ['1.25rem', '1.5rem' ]
      },
      boxShadow: {
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },

      colors: {
        'blue': '#0799EB',
        'orange': '#E55733',
        'yellow': '#FFCE53',    
        'green': '#43A363',
        'light-gray': '#DFE3E7',
        'secondary-gray': '#909090',
        'dark-background': '#202020',
        'white': '#FFFFFF',
        'primary-text': '#414244',
        'purple': '#725AED'
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(-100%)' },
        },
        hoverText: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(-6px)', opacity: '1' },
        },

        leaveText: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(6px)', opacity: '0' },
        },
        },
      },
      animation: {
        'hoverText': 'hoverText 0.3s ease-in-out forwards' ,
        'leaveText': 'leaveText 0.3s ease-in-out forwards',
        marquee: 'marquee 20s linear infinite',
        'marquee-pause': 'marquee 20s linear infinite paused',
        'hover-shadow': 'hoverShadow 0.5s ease-in-out',
      },
    },
  }


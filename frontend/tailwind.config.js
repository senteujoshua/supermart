/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary dark/base color - deep teal-gray
        primary: {
          DEFAULT: '#30364F',
          50: '#E8E9ED',
          100: '#D1D3DB',
          200: '#A3A7B7',
          300: '#757B93',
          400: '#474F6F',
          500: '#30364F',
          600: '#272C3F',
          700: '#1E222F',
          800: '#15181F',
          900: '#0C0E10',
        },
        // Secondary/accent muted - cool gray-blue
        secondary: {
          DEFAULT: '#ACBAC4',
          50: '#F5F7F8',
          100: '#EBF0F2',
          200: '#D7E0E5',
          300: '#C3D1D8',
          400: '#ACBAC4',
          500: '#8FA1AD',
          600: '#728896',
          700: '#566A76',
          800: '#3A4C56',
          900: '#1E2E36',
        },
        // Neutral warm cream-beige
        cream: {
          DEFAULT: '#E1D9BC',
          50: '#FDFCF8',
          100: '#FAF8F1',
          200: '#F5F1E3',
          300: '#F0EAD5',
          400: '#E1D9BC',
          500: '#D2C8A3',
          600: '#C3B78A',
          700: '#B4A671',
          800: '#958758',
          900: '#766840',
        },
        // Brightest off-white surface
        offwhite: {
          DEFAULT: '#F0F0DB',
          50: '#FFFFFF',
          100: '#FDFDE8',
          200: '#F0F0DB',
          300: '#E3E3CE',
          400: '#D6D6C1',
          500: '#C9C9B4',
          600: '#BCBCA7',
          700: '#AFAF9A',
          800: '#A2A28D',
          900: '#959580',
        },
      },
      // Glass effect shadows
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(48, 54, 79, 0.15)',
        'glass-sm': '0 4px 16px 0 rgba(48, 54, 79, 0.1)',
        'glass-lg': '0 12px 48px 0 rgba(48, 54, 79, 0.2)',
        'glass-inner': 'inset 0 1px 1px 0 rgba(240, 240, 219, 0.1)',
        'glass-glow': '0 0 20px rgba(172, 186, 196, 0.3)',
        'float': '0 20px 60px -15px rgba(48, 54, 79, 0.25)',
      },
      // Backdrop blur
      backdropBlur: {
        'glass': '16px',
        'glass-lg': '24px',
        'glass-sm': '8px',
      },
      // Border radius for glass elements
      borderRadius: {
        'glass': '20px',
        'glass-lg': '28px',
        'glass-sm': '12px',
      },
      // Animation for micro-interactions
      animation: {
        'glass-shimmer': 'shimmer 2s ease-in-out infinite',
        'float-up': 'floatUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        floatUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      // Background gradients
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(48, 54, 79, 0.4) 0%, rgba(172, 186, 196, 0.2) 100%)',
        'glass-gradient-light': 'linear-gradient(135deg, rgba(240, 240, 219, 0.9) 0%, rgba(225, 217, 188, 0.7) 100%)',
        'hero-gradient': 'linear-gradient(135deg, #30364F 0%, #474F6F 50%, #ACBAC4 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(172, 186, 196, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(48, 54, 79, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(225, 217, 188, 0.3) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
};

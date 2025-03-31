/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
        colors: {
          primary: {
            light: '#3494e6', // Light blue for light mode
            dark: '#5dadff',  // Brighter blue for dark mode
          },
          achievement: {
            light: '#ff9500', // Keep the achievement color
            dark: '#ff9500',  // Keep it the same in dark mode
          },
          accent: {
            purple: '#3494e6',  // Adjust purple to be more aligned with tech theme
          }
        },
      },
    },
    plugins: [],
  }

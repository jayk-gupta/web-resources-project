/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { // Use extend here to merge custom settings with Tailwind's defaults
      fontFamily: {
        // Kept most custom fonts, assuming they are imported/used globally
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        montserrat: ['Montserrat', "sans-serif"],
        ultra: ["Ultra", "serif"],
        francois: ["Francois One", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        lobster: ['Lobster', "cursive"],
        // Unified game/pixel fonts
        game: ['"Press Start 2P"', 'cursive'],
        pixel: ["'Press Start 2P'", "cursive"],
        retro: ["VT323", "monospace"]
      },
      
      // Removed custom 3xl, 4xl shadows as they used old purple/pink colors
      // You can add back custom shadows that align with the red glow here if needed
      // Example:
      boxShadow: {
         'red-glow': '0 0 15px rgba(220, 38, 38, 0.7)',
      },
      
      // Removed custom dropShadow as they used old colors
      dropShadow: {
        'red-glow': '0 0 8px rgba(220, 38, 38, 0.9)',
      },
      
      // Removed custom 'grape' color palette to avoid conflicts
      // The theme now relies on default Tailwind colors (black, gray, red, cyan, orange)
      colors: {}, 
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000', 'grey': '#1c1c1c','purple':'#918EF4'
        // Define the 'black' background color
      },
      fontSize: {
        'customFSizeXL': '4rem',
        'customFSizeM': '2rem', // Adjust the size as needed
        'customFSizeS': '1rem', // Adjust the size as needed

      },
    },
    fontFamily:{
      def:['Lilita One'] 
      ,reg:['Gabarito']
    },
    
  },
  plugins: [],
}

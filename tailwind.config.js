
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",           // If you have a main App file
    "./app/**/*.{js,jsx,ts,tsx}",      // If you use Expo Router (app folder)
    "./src/**/*.{js,jsx,ts,tsx}",      // If you keep components in src
    "./components/**/*.{js,jsx,ts,tsx}" // Any other folders with components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgHomeMobile": "url('./assets/home/background-home-mobile.jpg')",
        "bgHomeTablet": 'url(./assets/home/background-home-tablet.jpg)',
        "bgHomeDesktop": 'url(./assets/home/background-home-desktop.jpg)',
        "bgDestinationMobile": "url('./assets/destination/background-destination-mobile.jpg')",
        "bgDestinationTablet": 'url(./assets/destination/background-destination-tablet.jpg)',
        "bgDestinationDesktop": 'url(./assets/destination/background-destination-desktop.jpg)',
        "bgCrewMobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "bgCrewTablet": 'url(./assets/crew/background-crew-tablet.jpg)',
        "bgCrewDesktop": 'url(./assets/crew/background-crew-desktop.jpg)',
        "bgTechnologyMobile": "url('./assets/technology/background-technology-mobile.jpg')",
        "bgTechnologyTablet": 'url(./assets/technology/background-technology-tablet.jpg)',
        "bgTechnologyDesktop": 'url(./assets/technology/background-technology-desktop.jpg)',
      }
    },
  },
  plugins: [],
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import  { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: [ "Coriderlogo.png", "Coriderlogo.svg","masked-icon.svg"],
  manifest: {
    name: "CoRider",
    short_name: "CoRider",
    description: "An app platform allows you to find and join rides.",
    icons: [
      {
        "src": "/Coriderlogo.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "monochrome"
      },
      {
        "src": "/Coriderlogo.svg",
        "sizes": "48x48",
        "type": "image/svg+xml",
        "purpose": "monochrome"
      },
			{
				src: "/maskable_icon.png",
				sizes: "337x337",
				type: "image/png",
				purpose: "any maskable",
			}
    ],
    theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",

  }
  
}
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(),
    VitePWA(manifestForPlugin),],
          

})

// VitePWA({
//   registerType: 'autoUpdate',
//   workbox: {
//     clientsClaim: true,
//     skipWaiting: true
//   }
// })

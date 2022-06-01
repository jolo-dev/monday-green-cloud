import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss({
    presets: [
      presetAttributify(),
      presetUno(),
      presetIcons({scale: 2.5}),
    ],
  })],
})

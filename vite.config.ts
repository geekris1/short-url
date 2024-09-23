import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, transformerAttributifyJsx, presetIcons } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'height': '1.3em',
            'width': '1.3em',
            'vertical-align': 'text-bottom',
          },
        }),
        presetAttributify(),
        presetUno()
      ],
      transformers: [
        transformerAttributifyJsx(),
      ],
    }),
    react()
  ],
})

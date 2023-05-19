import { defineConfig, sharpImageService } from 'astro/config'
import Yaml from '@modyfi/vite-plugin-yaml'

export default defineConfig({
  site: 'https://sngrstudio-astro-template.netlify.app',
  integrations: [],
  vite: {
    plugins: [Yaml()],
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
})

import { defineConfig } from 'astro/config'
import Yaml from '@modyfi/vite-plugin-yaml'

import compress from 'astro-compress'
import critters from 'astro-critters'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngrstudio-astro-template.netlify.app',
  integrations: [compress(), critters()],
  vite: {
    plugins: [Yaml()],
  },
  experimental: {
    assets: true,
  },
  image: {
    service: 'astro/assets/services/sharp',
  },
})

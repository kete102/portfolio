// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://kete102.github.io',
	base: 'mi-repo',
	integrations: [tailwind()]
})

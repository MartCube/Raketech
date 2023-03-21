import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	srcDir: 'src',
	typescript: {
		strict: true,
		typeCheck: false,
		shim: false
	},
	// modules: ['@nuxtjs/algolia'],
	vite: {
		logLevel: 'info',
	},
})
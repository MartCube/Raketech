import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	srcDir: 'src',
	typescript: {
		strict: true,
		typeCheck: false,
		shim: false
	},

	modules: ['@nuxtjs/algolia'],
	algolia: {
		apiKey: '3U8LNKY0F7',
		applicationId: '061ec0c8cd5a4d99ac547d5fc4a54b56',
	},

	vite: {
		logLevel: 'info',
	},
})
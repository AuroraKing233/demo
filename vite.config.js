const path = require('path')

module.exports = {
	alias: {
		'@/': path.resolve('./src/')
	},
	hostname: 'localhost',
	port: 8080,
	open: true,
	https: false,
	ssr: false,
	base: './',
	outDir: 'dist'
}
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['lk.skilla.ru']
	},
	reactStrictMode: true,

	transpilePackages: ['dayjs'],

	webpack(config, options) {
		config.module.rules.push({
			test: /\.(mp3)$/,
			type: 'asset/resource',
			generator: {
				filename: 'static/chunks/[path][name].[hash][ext]'
			}
		})

		return config
	}
}

module.exports = nextConfig
// export default nextConfig

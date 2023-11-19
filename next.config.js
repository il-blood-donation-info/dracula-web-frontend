// Try proxying requests to work around CORS (implemented, not deployed yet)
// and/or self-signed cert.

const dev = process.env.NODE_ENV !== 'production'
if(dev) {
  // TODO useless with rewrites: https://github.com/vercel/next.js/issues/21537
  //process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

// These have defaults in .env* files.
console.log(`\
  Proxying              http://localhost:3000/api -> ${process.env.PROXY_TO_URL}
  Frontend will access: ${process.env.NEXT_PUBLIC_API_URL}
`)

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	output: 'export',
}

module.exports = nextConfig

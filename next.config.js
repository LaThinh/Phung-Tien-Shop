/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.graphassets.com'
            },
            {
                protocol: 'https',
                hostname: 'us-east-1-shared-usea1-02.graphassets.com'
            }
        ]

    },

    reactStrictMode: false,

}

module.exports = nextConfig

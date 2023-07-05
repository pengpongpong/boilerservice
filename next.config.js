/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'unsafe-eval';
  child-src 'self';
  style-src 'self';
  font-src 'self';
`

const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: '/(.)*',
    //             headers: [
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    //                 }
    //             ],
    //         },
    //     ]
    // },
    images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "swiperjs.com",
              port: '',
          },
      ],
  },
}

module.exports = nextConfig

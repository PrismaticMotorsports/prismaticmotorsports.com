/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // I need this for some reason it fucks the styling if not enabled????
  images: {
    dangerouslyAllowSVG: true,
  }
}

module.exports = nextConfig

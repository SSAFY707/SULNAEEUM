/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects(){ 
    return [
      {
        source: '/list',
        destination: '/test',
        permanent: true,
      },
      {
        source: '/map',
        destination: '/test',
        permanent: true,
      },
      {
        source: '/random',
        destination: '/test',
        permanent: true,
      },
      {
        source: '/rank',
        destination: '/test',
        permanent: true,
      },
      {
        source: '/recommend',
        destination: '/test',
        permanent: true,
      },
      {
        source: '/user',
        destination: '/test',
        permanent: true,
      },
      {
        source: '/',
        destination: '/test',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig

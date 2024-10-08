import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e1.pxfuel.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'react-ecommerce-1blu03umy-ashish-bind.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'st2.depositphotos.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com' ,
        pathname: '/**',
      },      
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },      
      {
        protocol: 'https',
        hostname: 'www.dji.com',
        pathname: '/**',
      },
    ],
  },
};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(nextConfig);

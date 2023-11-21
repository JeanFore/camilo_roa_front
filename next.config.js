/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    env: {
        // Ejemplo de variable de entorno en el lado del cliente
        BASE_URL: process.env.BASE_URL,
      },
};
  
module.exports = nextConfig;

// next.config.js
const withNextIntl = require('next-intl/plugin')('./src/i18n/index.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // Statik export + <Image> için gerekli
  images: {
    unoptimized: true,
  },

  // Kritik: /tr/ -> /tr/index.html, /blog/ -> /blog/index.html üret
  trailingSlash: true,

  // Next’in otomatik slash redirect’leriyle kavga etme
  skipTrailingSlashRedirect: true,
};

module.exports = withNextIntl(nextConfig);

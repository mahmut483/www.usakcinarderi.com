const { routing } = require('./src/i18n/routing');

module.exports = {
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localeDetection: true
}; 
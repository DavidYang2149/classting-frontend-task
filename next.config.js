/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

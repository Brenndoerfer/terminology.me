const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
    // 'remark-gfm',
    // 'rehype-autolink-headings',
    // 'remark-unwrap-images',
    // 'hast-util-whitespace',
    // 'micromark-extension-gfm',
    // 'micromark-util-combine-extensions',
    // 'micromark-util-symbol',
    // 'micromark-util-encode',
    // 'micromark-util-resolve-all',
    // 'mdast-util-gfm',
    // 'mdast-util-gfm-autolink-literal',
]);

module.exports = withPlugins([withTM], {
    reactStrictMode: true,
    experimental: { css: true },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
})

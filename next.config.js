const withPlugins = require("next-compose-plugins");

const withSvgr = require('next-plugin-svgr');

// module.exports = {
//     reactStrictMode: true,
// }
module.exports = withPlugins([
    withSvgr
    // your other plugins here
]);
const { POSTCSS_MODES } = require("@craco/craco");

module.exports = {  
    style: {
        pcss: {
            mode: POSTCSS_MODES.file
        }
    }, 
    plugins : []
};
// const { POSTCSS_MODES, ESLINT_MODES } = require("@craco/craco");
// const pathResolve = require('path').resolve;

// module.exports = {
//   style: {
//     css: {
//       loaderOptions: {
//         modules: true,
//         localIdentName: '[name]__[local]--[hash:base64:5]',
//       }
//     },
//     postcss: {
//       mode: POSTCSS_MODES.file,
//       loaderOptions: {
//         sourceMap: true,
//       },
//     }
//   },
//   webpack: {
//     alias: {
//       '@': pathResolve('src'),
//     },
//     plugins: [],
//   },
//   plugins: [
//     {
//       plugin: {
//           overrideWebpackConfig: ({ webpackConfig, cracoConfig, context: { env } }) => {
//             const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
//             if (!oneOfRule) {
//               throw Error(`Can't find a 'oneOf' rule under module.rules in the ${env} webpack config!`);
//             }
        
//             const cssRule = oneOfRule.oneOf.find(rule => rule.test && rule.test.toString().includes('css'));
//             cssRule.test = /\.p?css$/;

//             return webpackConfig;
//           }        
//       },
//     },
//   ]
// };
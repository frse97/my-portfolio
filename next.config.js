//import getConfig from 'next/config';
const withLess = require('@zeit/next-less');

//Waiting for solution Issue #https://stackoverflow.com/questions/55113156/publicruntimeconfig-in-next-config-js-is-always-undefined-in-prod-staging 

// const getNodeEnv = () => {
//   const { publicRuntimeConfig } = getConfig();
//   const isProd = publicRuntimeConfig.isProd || false;
//   const isStaging = publicRuntimeConfig.isStaging || false;

//   return { isProd, isStaging }
// };
// const env = getNodeEnv();
// console.log(env);

// module.exports = {
//   publicRuntimeConfig: {
//     localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
//   },
// };

//Export less
module.exports = withLess({
  lessLoaderOptions: {},
});

const nextEnv = require("next-env");
const dotEnvLoad = require("dotenv-load");
const withSass = require("@zeit/next-sass");
const sourcebit = require('sourcebit');
// const sourcebitConfig = require('./sourcebit.js');

dotEnvLoad();
const withNextEnv = nextEnv();
// sourcebit.fetch(sourcebitConfig);


module.exports = withNextEnv();
module.exports = withSass({
    /* config options here */
});

module.exports = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        STORAGE_URL: process.env.STORAGE_URL,
        SPOTIFY_AUTHORIZE_URL: process.env.SPOTIFY_AUTHORIZE_URL,
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        SPOTIFY_REDIRECT_URL: process.env.SPOTIFY_REDIRECT_URL
    },
    poweredByHeader: false,
    images: {
        domains: ['res.cloudinary.com'],
    }
};
const nextEnv = require("next-env");
const dotEnvLoad = require("dotenv-load");
const withSass = require("@zeit/next-sass");


dotEnvLoad();
const withNextEnv = nextEnv();

module.exports = withNextEnv();
module.exports = withSass({
    /* config options here */
});

module.exports = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        STORAGE_URL: process.env.STORAGE_URL
    },
    poweredByHeader: false,
    images: {
        domains: ['res.cloudinary.com'],
    }
};
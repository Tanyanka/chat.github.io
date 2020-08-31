const path = require('path')
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        'REACT_APP_API_KEY': process.env.API_KEY,
        'REACT_APP_AUTH_DOMAIN': process.env.AUTH_DOMAIN,
        'REACT_APP_DATABASE_URL': process.env.DATABASE_URL,
        'REACT_APP_PROJECT_ID': process.env.PROJECT_ID,
        'REACT_APP_STORAGE_BUCKET': process.env.STORAGE_BUCKET,
        'REACT_APP_MESSAGING_SENDER_ID': process.env.MESSAGING_SENDER_ID,
        'REACT_APP_APP_ID': process.env.APP_ID
    },
    assetPrefix: !debug ? '/chat/' : '',
    webpack: (config) => {
        config.module.rules = config.module.rules.map(rule => {
            if(rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false
            }
            return rule
        })
        return config
    },
}

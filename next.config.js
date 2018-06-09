module.exports = {
    webpack: (config, {dev}) => {
        if(dev) {
            config.devtool = 'cheap-module-eval-source-map'
        }
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        config.module.rules.push({
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                failOnWarning: true,
            }
        });

        return config
    },
    publicRuntimeConfig: {
        apiUrl: 'http://localhost:3000'
    }
};

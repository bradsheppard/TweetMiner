module.exports = {
    webpack: (config, {dev}) => {
        if(dev) {
            config.devtool = 'cheap-module-eval-source-map'
        }
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        return config
    }
};

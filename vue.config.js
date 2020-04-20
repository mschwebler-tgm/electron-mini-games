module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                target: 'portable',
                productName: 'Mini Games',
            },
        },
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .test(/\.(?:png|jpg|svg)$/)
            .use('url-loader')
    },
};

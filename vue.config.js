module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                target: 'portable',
                productName: 'BFCC Mini Games',
            },
        },
    },
};

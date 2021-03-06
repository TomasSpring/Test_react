module.exports = function returnFontsConfig() {
    return {
        module: {
            rules: [
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    },
                },
            ],
        },
    };
};

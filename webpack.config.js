module.export = {
    modules: {
        rules: [
            {
                test: /\,less$/,
                loader: 'less-loader', //Compiles to CSS
            },
        ],
    },
};
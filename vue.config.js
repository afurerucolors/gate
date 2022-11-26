module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: 'http://localhost:8080'
    },
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Afureru Colors';
                args[0].meta = {
                    'description': 'Digital Illustrator. I do anime, game, movie fan arts and original characters.',
                    'keywords': 'Anime, Fan Art, Commission, Artist, Original Character',
                    'author': 'Afureru Colors',
                    'theme-color': '#E0F7FA',
                };

                return args;
            })
    },
    transpileDependencies: [
        'vuetify'
    ],


}
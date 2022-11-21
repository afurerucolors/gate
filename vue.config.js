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
                    'description': 'Illustrator. I draw anime, game, movie, and original characters.',
                    'keywords': 'anime, illustrator, art, fanart, commission, artist',
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
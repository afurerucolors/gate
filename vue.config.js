module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Afureru Colors';
                args[0].meta = {
                    'description': 'Illustrator/Designer that mainly draw fanworks from anime/game. For job inquiries and commission, you can contact me via the social media provided.',
                    'keywords': 'anime, illustrator, game, illustration, fanart, commission',
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
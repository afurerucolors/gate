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
                    'description': 'Artist/Illustrator. I draw fanarts, original character and concept art.',
                    'keywords': 'illustration, illust, fan art, commission, afureru colors',
                    'author': '(溢れる) Afureru Colors',
                    'theme-color': '#E0F7FA',
                };

                return args;
            })
    },
    transpileDependencies: [
        'vuetify'
    ],


}
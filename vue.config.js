module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Afureru Colors';
        args[0].meta = {
          'description': 'Provide illustrations, fan arts and artworks of anime, manga, fictional or non-fictional characters',
          'keywords': 'anime, manga, illustration, fanart, wallpaper',
          'author': 'Afureru',
          'theme-color': '#00225c',
        };

        return args;
      })
  },
  transpileDependencies: [
    'vuetify'
  ],

}


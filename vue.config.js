module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/afurerucolors@github.io/dist/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
}

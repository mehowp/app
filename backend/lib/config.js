module.exports = {
    port: '3009',
    ip: "0.0.0.0",
    templates: './public/views',
    assets: {
        js: '/public/assets/js',
        css: '/public/assets/css',
        images: '/public/assets/images'
    },
    db: {
      host: '0.0.0.0:27017',
      name: 'project1'
    }
}

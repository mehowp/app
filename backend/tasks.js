module.exports = function(){
    var fs = require('fs');
    var tasks = [];
    var dir = __dirname + '/tasks/';
    var path = require('path');

    var rootDirectory = path.resolve(__dirname + '/..');

    global.assets = {
        css: rootDirectory + '/src/scss/',
        js: rootDirectory + '/src/js/',
        jade: rootDirectory + '/src/jade/',
        output: {
            css: rootDirectory + '/public/src/css/',
            js: rootDirectory + '/public/src/js/',
            views: rootDirectory + '/public/views/',
        },
        maps: rootDirectory + '/public/src/maps/'
    }

    fs.readdirSync(__dirname + '/tasks/')
        .filter(file => ~file.search(/^[^\.].*\.js$/))
        .forEach(task => {
            require(__dirname + '/tasks/' + task)();
        });

}

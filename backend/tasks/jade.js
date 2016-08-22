module.exports = (options, locals) => {
    var jade = require('jade'),
        fs = require('fs'),
        merge = require('merge'),
        recursive = require('recursive-readdir'),
        path = require('path'),
        mkdirp = require('mkdirp'),
        getDirName = require('path').dirname;

    function writeFile(path, contents, cb) {
        mkdirp(getDirName(path), function(err) {
            if (err) return cb(err);

            fs.writeFileSync(path, contents, cb);
        });
    }
    var compiler = this;
    
    recursive(assets.jade, function(err, files) {

        try {

            files.forEach(filepath => {
                result = jade.renderFile(filepath, merge(options, locals));
                file = filepath.split('.')[0].replace(rootDirectory + '/src/templates', rootDirectory + '/public/views') + '.html';

                writeFile(file, result);
            });
        } catch(err){
                 compiler.on('error', () => {
                    console.log(chalk.red("error has occuried while compiling jade"));
                    console.log(error);
                });
        }
    });
}

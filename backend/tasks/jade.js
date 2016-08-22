module.exports = (options, locals) => {
    var jade = require('jade'),
        fs = require('fs'),
        merge = require('merge'),
        compiler = this;
    
    recursive(assets.jade, function(err, files) {

        if(!err) {

            files.forEach(filepath => {
                result = jade.renderFile(filepath, merge(options, locals));
                file = filepath.split('.')[0].replace(rootDirectory + '/src/templates', rootDirectory + '/public/views') + '.html';

                return writeFile(file, result);
            });
        } else {
                return compiler.on('error', () => {
                    console.log(chalk.red("error has occuried while compiling jade"));
                    console.log(error);
                });
        }
    });
}

module.exports = () => {
    var sass = require('node-sass');
    var fs = require('fs');
    var chalk = require('chalk');
    var gulp = require('gulp');
    var fs = require("fs");
    var postcss = require('postcss');


    var scssFiles = [{
        input: 'shared/_atomic',
        output: 'supreme'
    }, {
        input: 'admin',
        output: 'admin'
    }, {
        input: 'main',
        output: 'main'
    }, {
        input: 'reset',
        output: 'reset'
    }];

    return scssFiles.map(file => {
        var start = new Date();
        var path = {
            input: assets.css + file.input + '.scss',
            output: assets.output.css + file.output + '.css',
            min: assets.output.css + file.output + ".min.css",
            maps: assets.maps + file.output + '.map.css'
        }
        return sass.render({
            file: path.input,
            outFile: path.output,
            sourceMap: path.maps
        }, function(error, result) { // node-style callback from v3.0.0 onwards
            if (error) {
                console.log(error);
            } else {
                var start = new Date().getTime();
                return postcss([
                        require('autoprefixer')
                    ])
                    .process(result.css.toString(), {
                        to: path.min
                    })
                    .then(function(postResult) {
                        fs.writeFileSync(path.min, postResult.css);
                        var end = new Date().getTime();
                        if (end - start) {
                            var sum = ((end - start) / 100);
                            console.log(chalk.dim("[" + initialized + "] ") +
                                chalk.cyan(file.input + ".scss") + " compiled to " + chalk.green(path.output));
                        }
                    });
            }
        });

    })

}

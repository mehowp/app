module.exports = (sources) => {
    var sass = require('node-sass');
    var chalk = require('chalk');
    var gulp = require('gulp');
    var postcss = require('postcss');

    var compiler = this;

    return sources.map(file => {
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
            sourceMap: path.maps,
            outputStyle: 'compressed'
        }, function(error, result) { // node-style callback from v3.0.0 onwards
            if(!error) {
                var start = new Date().getTime();
                return postcss([
                        require('autoprefixer')(),
                        require('postcss-combine-duplicated-selectors')(),
                        require("css-mqpacker")(),
                        require("postcss-discard-unused")()
                    ])
                    .process(result.css.toString(), {
                        to: path.min
                    })
                    .then(function(postResult) {
                        fs.writeFileSync(path.min, postResult.css);
                        var end = new Date().getTime();

                            var sum = ((end - start) / 100);

                            console.log(chalk.dim("[" + initialized + "] ") +
                                        chalk.cyan(file.input + ".scss") + " compiled to " + chalk.green(path.output));

                    });
            }else{

                compiler.on('error', ()=>{
                    console.log(chalk.red("error has occuried while compiling sass"));
                    console.log(error);
                });
            }
        });

    })

}

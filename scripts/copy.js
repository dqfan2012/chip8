var chalk = require("chalk");
const shell = require("shelljs");

function addCheckMark(file) {
    process.stdout.write(chalk.green(' √'));
    process.stdout.write(' Copied ' + file + ' to the ./public/assets/js directory\r\n');
}

shell.cp('-R', 'dist/bundle.js', 'public/assets/js/'); 
addCheckMark('bundle.js');

shell.cp('-Ru', 'dist/bundle.js.map', 'public/assets/js/'); 
addCheckMark('bundle.js.map');

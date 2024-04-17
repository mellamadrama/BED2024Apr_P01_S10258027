const path = require('node:path');
const fs = require('node:fs');

//colour output
//const chalk = require('chalk');
//
//console.log(chalk.yellow('hi!'));

//create file
const notes = './notes.txt';

path.dirname(notes);
path.basename(notes);
path.extname(notes);

//write file
const content = 'Some content!'

fs.writeFile(notes, content, function (err) {
    if (err) {
        console.error(err);
    } else{
        console.log(content);
    }
})

//read file
fs.readFile(notes, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})
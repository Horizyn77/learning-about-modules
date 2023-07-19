import chalk from 'chalk';

import figlet from 'figlet';

import greet from './greet.js'


const styledMessage = chalk.bgGreen.black(greet("Xola"));

// call the function & print the result on the screen
// console.log(greet('Xola'))

figlet(greet("Xola"), (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(chalk.bgGreen.black(data));
})
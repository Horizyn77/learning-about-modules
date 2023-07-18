import chalk from 'chalk';

import figlet from 'figlet';

import greet from './greet.js'


const styledMessage = chalk.bgGreen.black(greet("Xola"));

// call the function & print the result on the screen
// console.log(greet('Xola'))

console.log(styledMessage)

figlet(greet("Xola"), (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(data)
})
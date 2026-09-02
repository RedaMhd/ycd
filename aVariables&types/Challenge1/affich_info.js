const prompt = require('prompt-sync')();

const name = prompt("what is your name : ");
const pname = prompt("what is your second name : ");
const age = prompt("your age : ");
const sexe = prompt("sexe : (male or female)");
const email = prompt("your email : ");

console.log(`
    ${name} ${pname} is ${age} old, hi is a ${sexe},
    hi is email : (${email}) .
    `);
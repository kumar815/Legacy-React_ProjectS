/*no2
let greet = () => {
    console.log('Good !Morning');
}

let hello = () => {
    console.log('Hello');
}

module.exports = {
    greet,
    hello
}
*/


let greet = (name) => {
    return `Good Morning ${name}`;
}

let reverseString = (str) => {
    let temp = '';
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str.charAt(i);
    }
    return temp;
}

module.exports = {
    greet,
    reverseString
};
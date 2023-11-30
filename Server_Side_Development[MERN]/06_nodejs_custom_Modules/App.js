/*  no -1
let greet = () => {
    console.log('Good !Morning');
}
greet();
*/

/*no2
const wish = require('../06_nodejs_custom_Modules/Util/RegProgram/RegProgram');
wish.greet();
wish.hello();
*/

//reverse String
const wish = require('../06_nodejs_custom_Modules/Util/RegProgram/RegProgram');

let msg = wish.greet("john");
let reversedMsg = wish.reverseString(msg);

console.log(msg);
console.log(reversedMsg);
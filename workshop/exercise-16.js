// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];

// write your loop here...

// Method ONE
// for (let num = 0; num < 1000; num++) {
//     let str = num.toString();
//     let total = 0;
//     for (let j = 0; j < str.length; j++) {
//         total = total + parseInt(str[j]) ** 3;
//     }
//     if (num === total) {
//         armstrongNumbers.push(num);
//     }
// }

// Method TWO
for (let num = 0; num < 1000; num++) {
    let digit1 = Math.floor(num / 100);
    let digit2 = Math.floor((num - digit1 * 100) / 10);
    let digit3 = num - digit1 * 100 - digit2 * 10;

    if (num === (digit1 ** 3 + digit2 ** 3 + digit3 ** 3)) {
        armstrongNumbers.push(num);
    }
}

console.log(armstrongNumbers);

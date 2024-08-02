"use strict";
// const hello1= "hello1"
// console.log(hello1)
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
const text = "hello how are you";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0, 5));
const str1 = "hello";
const str = "hello";
let res;
if (str1 == str) {
    res = true;
}
else {
    res = false;
}
console.log(res);
const product = "I Phone";
const price = 1000;
const output = `product is ${product} and price is ${price}`;
console.log(output);
const myName = "Meet";
console.log(myName);
const student1 = {
    name: "meet",
    number: 9393939393,
    age: 21
};
const Introduction = (student1) => {
    const { name, age, number } = student1;
    return `my name is ${name} and my age is ${age} and my number is ${number}`;
};
console.log(Introduction(student1));
var num = 20;
const xyz = () => {
    if (num === 20) {
        return num;
    }
    return "ok";
};
console.log(typeof (xyz()));

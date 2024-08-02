// const hello1= "hello1"

// console.log(hello1)

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(3, 4));

const text: string = "hello how are you";

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.slice(0, 5));

const str1: string = "hello";
const str: string = "hello";

let res: boolean;
if (str1 == str) {
  res = true;
} else {
  res = false;
}
console.log(res);

const product: string = "I Phone";

const price: number = 1000;

const output: string = `product is ${product} and price is ${price}`;

console.log(output);

const myName = "Meet";
console.log(myName);

// call signature --

type Student = {
  name: string;
  number: Number;
  age: Number;
};

const student1: Student = {
  name: "meet",
  number: 9393939393,
  age: 21,
};

const Introduction = (student1: Student): string => {
  const { name, age, number } = student1;

  return `my name is ${name} and my age is ${age} and my number is ${number}`;
};

console.log(Introduction(student1));

var num: number = 20;
const xyz = (): any => {
  if (num === 20) {
    return num;
  }

  return "ok";
};

console.log(typeof xyz());

const userInput = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value == "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid input type. Expected string or number.");
  }
};

console.log(userInput(10));
console.log(userInput("hello"));

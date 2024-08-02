//1
const data1 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data1.length);

//2
const data2 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data2.at(1));

//3
const data3 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data3.join(" "));

//4
const data4 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

let pop = data4.pop({ roll_no: "5", name: "yash", moNo: "7825621123" });
console.log(data4);

//5
const data5 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];
const push = data5.push({ roll_no: "6", name: "vinit", moNo: "7825621123" });
console.log(data5);
// 6

const data6 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];
const shift = data6.shift({ roll_no: "1", name: "meet", moNo: "9874152630" });
console.log(data6);

//7
const data7 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

const unshift = data7.unshift({
  roll_no: "6",
  name: "vinit",
  moNo: "7825621123",
});
console.log(data7);

//8

const data8 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];
delete data8[1];
console.log(data8);

//9

const data9 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data9.concat(data8, data7));

//10
const data10 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data10.copyWithin(1, 0, 2));

//11
const data11 = [
  [
    { roll_no: "1", name: "meet", moNo: "9874152630" },
    { roll_no: "2", name: "dipak", moNo: "963251425" },
    { roll_no: "3", name: "harr", moNo: "7825621123" },
    { roll_no: "4", name: "nirav", moNo: "7825621123" },
    { roll_no: "5", name: "yash", moNo: "7825621123" },
  ],
  [
    { roll_no: "1", name: "meet", moNo: "9874152630" },
    { roll_no: "2", name: "dipak", moNo: "963251425" },
    { roll_no: "3", name: "harr", moNo: "7825621123" },
    { roll_no: "4", name: "nirav", moNo: "7825621123" },
    { roll_no: "5", name: "yash", moNo: "7825621123" },
  ],
];
console.log(data11.flat());

//12

const data12 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];
data12.splice(1, 1, { name: "chipak" });
console.log(data12);

//13---- not work in vs code---
// const data13 = [
//   { roll_no: "1", name: "meet", moNo: "9874152630" },
//     { roll_no: "2", name: "dipak", moNo: "963251425" },
//     { roll_no: "3", name: "harr", moNo: "7825621123" },
//     { roll_no: "4", name: "nirav", moNo: "7825621123" },
//     { roll_no: "5", name: "yash", moNo: "7825621123" },
//   ];

// const b = data13.toSpliced(0,1)
// console.log(b)

//14
const data14 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data14.slice(0, 2));

//15
const data15 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];
const res1 = ["name",data15]
console.log(
  data15.includes(res1.includes(data15))
);

//16
const data16 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data16.indexOf({ roll_no: "5", name: "yash", moNo: "7825621123" }));

//17

const data17 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(
  data17.lastIndexOf({ roll_no: "5", name: "yash", moNo: "7825621123" })
);

//18
const data18 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "2", name: "yash", moNo: "7825621123" },
];

console.log(data18.sort());

//19

const data19 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data19.find((e) => e.roll_no == "5"));

//20
const data20 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "3", name: "haresh", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data20.findLast((e) => e.roll_no == 3));

//21
const data21 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "3", name: "haresh", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data21.findIndex((e) => e.roll_no == 3 && e.name == "haresh"));

//22
const data22 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "3", name: "haresh", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data22.findLastIndex((e) => e.roll_no == 3));

//23
const data23 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "3", name: "haresh", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data23.toString());

//24
const data24 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "3", name: "haresh", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data24.reverse());

//25
// const data25 = [
//   { roll_no: "1", name: "meet", moNo: "9874152630" },
//     { roll_no: "2", name: "dipak", moNo: "963251425" },
//     { roll_no: "3", name: "harr", moNo: "7825621123" },
//     { roll_no: "4", name: "nirav", moNo: "7825621123" },
//     { roll_no: "3", name: "haresh", moNo: "7825621123" },
//     { roll_no: "5", name: "yash", moNo: "7825621123" },
//   ];

//     console.log(data25.toSorted())
//26
// const data26 = [
//   { roll_no: "1", name: "meet", moNo: "9874152630" },
//     { roll_no: "2", name: "dipak", moNo: "963251425" },
//     { roll_no: "3", name: "harr", moNo: "7825621123" },
//     { roll_no: "4", name: "nirav", moNo: "7825621123" },
//     { roll_no: "3", name: "haresh", moNo: "7825621123" },
//     { roll_no: "5", name: "yash", moNo: "7825621123" },
//   ];

//     console.log(data26.toReversed())

//27--- numeric array sort()---only work in numeric array

const data27 = [2, 3, 5, 6, 7, 8, 33, 32, 2, 4, 5];
const a = data27.sort(mysort);
function mysort(a, b) {
  return a - b;
}
console.log(a);

//28--- sort array element in random order
const data28 = [2, 3, 5, 4, 3, 5, 4, 3, 5, 5];
const b = data28.sort(random);
function random(a, b) {
  return 0.5 - Math.random();
}
console.log(b);

//29
const data29 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

const map1 = data29.map((e) => e.name);
const map2 = data29.map((e) => e.roll_no > 2);
console.log(map2);
console.log(map1);

// //30

const data30 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
    { roll_no: "2", name: "dipak", moNo: "963251425" },
    { roll_no: "3", name: "harr", moNo: "7825621123" },
    { roll_no: "4", name: "nirav", moNo: "7825621123" },
    { roll_no: "5", name: "yash", moNo: "7825621123" },
  ];

function myfun(e){
    console.log(e.roll_no*2)
}

  console.log(data30.forEach(myfun))

//31
const data31 = [
  [2, 3, 4, 5],
  [2, 5, 7],
];

console.log(data31.flatMap((x) => x.map((e) => e * 2)));

//32
const data32 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data32.filter((e) => e.roll_no > 2));

//33
const data33 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data33.some((e) => e.roll_no == 5));

//34
const data34 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data34.every((e) => e.roll_no == 5));

//35

const data35 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

let rollnums = data35.reduce((total, val) => total + parseInt(val.roll_no), 0);
console.log(rollnums);

//36
const data36 = [
  { roll_no: 1, name: "meet", moNo: "9874152630" },
  { roll_no: 2, name: "dipak", moNo: "963251425" },
  { roll_no: 3, name: "harr", moNo: "7825621123" },
  { roll_no: 4, name: "nirav", moNo: "7825621123" },
  { roll_no: 5, name: "yash", moNo: "7825621123" },
];

let rollnums1 = data36.reduceRight((em, val) => em + val.roll_no, 0);
console.log(rollnums);

//37
const data37 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

let d37 = data37.entries();
for (x of d37) {
  console.log(x);}

//38
const data38 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

let d38 = data38.keys();
for (x of d38) {
  console.log(x);
}

//39----not work in vscode
// const data39 = [
//   { roll_no: "1", name: "meet", moNo: "9874152630" },
//     { roll_no: "2", name: "dipak", moNo: "963251425" },
//     { roll_no: "3", name: "harr", moNo: "7825621123" },
//     { roll_no: "4", name: "nirav", moNo: "7825621123" },
//     { roll_no: "5", name: "yash", moNo: "7825621123" },
//   ];
//   console.log(data39.with(2,{name:"huhuhuhuh"}))

//40
const data40 = "meetraval";
console.log(Array.from(data40));

//41

const data41 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(...data41, { roll_no: "6", name: "champa", moNo: "7825621123" });

//42
const data42 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

const res = data42.values();
for (let x of res) {
  console.log(x);
}

//43
const data43 = [
  { roll_no: "1", name: "meet", moNo: "9874152630" },
  { roll_no: "2", name: "dipak", moNo: "963251425" },
  { roll_no: "3", name: "harr", moNo: "7825621123" },
  { roll_no: "4", name: "nirav", moNo: "7825621123" },
  { roll_no: "5", name: "yash", moNo: "7825621123" },
];

console.log(data43.toLocaleString());

//44

const data44 = (33, 33, "meet");
console.log(Array.of(data44));

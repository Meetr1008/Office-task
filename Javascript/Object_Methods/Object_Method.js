//1 ---Object.assign()--- merge all obj prop value into single obj if we have same prop so it is overwrite the prop of last obj
// const obj1 = {
//     name:"meet"
// }
// const obj2 = {
//     name1:"dipak"
// }
// const obj3 = {
//     name2:"raval"
// }
// const obj4 = {

// }

// const newobj = Object.assign(obj1,obj2,obj3)
// console.log(newobj)
// const vopy = Object.assign(obj4,obj3,obj2)
// console.log(vopy)
// console.log(obj4)

//2---Object.create()--- create new object from object prototype
//  const obj1= {
//     name:"meet",
//     age: 19,
//     method : function  display(){
//         console.log(this.name)
//     }

//  }
//  const creobj = Object.create(obj1)
//  creobj.name = "dipako"
//  creobj.method()

//  const animal = {
//    isHuman:false,
//    sound:"unknown",
//    method:function makesound(){
//        console.log(this.sound)
//    }
//  }
//   animal.method()
//  const dog =  Object.create(animal)
//  dog.sound = "hov hov hov hov"
//  dog.method()

//3
//Object.defineProperties()-- add or modified property of an object and return an object

// const obj = {
//   id: 22,
// };
// Object.defineProperties(obj, { 
//   property1: {
//     value: "dipko",
//     writable: true,
//     enumerable: true,

//   },
//   property2: {
//     value: "harh ",
//     writable: false,
//     enumerable: true,
//   },
// });
// obj.property1 = "chachu";
// obj.property2 = "yuxo";
// console.log(obj.property1);
// console.log(obj.property2);
// console.log(obj);

// const obj = {
//     id: 22,
//   };
//   Object.defineProperties(obj, {
//     property1: {
//       value: "dipko",

//       enumerable: true,
//       configurable:false

//     },
//     property2: {
//       value: "harh ",

//       enumerable: true,
//     //   configurable:true
//     },
//     id: {

//         enumerable: true,
//         // configurable:false
//       },
//   });
//   obj.property1 = "chachu";
//   obj.property2 = "yuxo";
//   obj.id = 1121
//   console.log(obj.property1);
//   console.log(obj.property2);
//   console.log(obj.id);
//   console.log(obj);

//using get and set
//   const obj = {

//   }

//   Object.defineProperties(obj,{
//     prop1:{
//         get:function(){
//             return this._prop1
//         },
//         set:function(val){
//             this._prop = val
//         }
//     }
//   })

// obj._prop1 = "meet"
// console.log(obj._prop1)

//4 using this you can add or modify the property value or u can use writalbe to modify this value which you are add or if you
// have already prop value you can change it with use of configurable
// const obj = {
//     id:99
// }

// Object.defineProperty(obj,"id",{
//     value:"meet",
//     // writable:true,
//     configurable:true,
//     enumerable:true

// })
// obj.id = 100
// obj.name = "hindi"
// console.log(obj)

// also you can use get or set
// const obj = {

// }

// Object.defineProperty(obj,"id",{
//   get: function(){
//     return val
//   },
//   set: function(newval){
//     val = newval
//   }

// })
// obj.id = 100

// console.log(obj.id)

//5 entries()--- with entries method u can print obj prop value in to key value pair
// in this number keyy are in acceding order
// const obj = {
//     name:"meet",
//     19:23,
//     3:5
// }
// console.log(Object.entries(obj))

// // also use in for loop
// for(let [key,value] of Object.entries(obj)){
//     console.log(key,value)
// }
// const str = "meet"
// console.log(Object.entries(str))

//6----
//Object.freeze()-- with this u are freeze the obj u can not add or modified prop in object
// const obj = {
//     name:"meey"
// }
// Object.freeze(obj)
// obj.name = "fipal"
// obj.id = 12
// console.log(obj.name,obj.id)

//7----
//Object.fromentries()----create a obj of key value pair of array

// const a = [["a",2],
// ["b",4]]
// const b = Object.fromEntries(a)
// console.log(b)

//8----
// Object.getOwnPropertyDescriptor--method return the property descriptors for specific prop value
// const obj = {
//     name:"meet"
// }
// const obj1 =Object.getOwnPropertyDescriptor(obj,"name")
// console.log(obj1)

// //using define property you can get also

// const obj3 = {

// }
// const obj4 = Object.defineProperty(obj3,"name",{
//     value:291

// })
// console.log(Object.getOwnPropertyDescriptor(obj3,"name"))

//byy default it is give false configrable if prop value are not in the main obj if is there then it is give all tru

//9----
// object.getoowndescriptors give all prop value discriptors info
// const obj = {
//     name:"meet",
//     age:19

// }
// const obj1 = Object.getOwnPropertyDescriptors(obj)
// console.log(obj1)

//10-----
//Object.getownproperty name --- it is give the all property name in the array and if you have array so it is give you the index number
// const obj = {
//     name:"meet",
//     age:20
// }
// const obj3 = {
//     name:"meet",
//    3:34,
//    2:122
// }
// const obj6 = Object.getOwnPropertyNames(obj3)
// const obj2 = Object.getOwnPropertyNames(obj)
// console.log(obj2)
// console.log(obj6)

// obj4 = [2,3,1,5]
// const obj5 = Object.getOwnPropertyNames(obj4)
// console.log(obj5)

//11----------
// const s1 = Symbol("meet")
// const s2 = Symbol("dipak")
// const obj = {
//     name:"haha",
//     [s1]:"huhu",
//     [s2]:"chihi"
// }
// const obj2 = Object.getOwnPropertySymbols(obj)
// console.log(obj2)

//12--------
//getprototype of return the proto type of spcified obj
// const obj = {

// }
// const person = {
//     name:"meet",
//     age:19
// }

// const obj1 = Object.getPrototypeOf(person)
// console.log(obj1)
// const obj2 = Object.setPrototypeOf(obj,person)
// console.log(Object.getPrototypeOf(obj))
// console.log(Object.getPrototypeOf(obj) == person)

//13
// has own property or not
// const obj = {
//     id:12
// }
// obj.ame = 'nirav'
// console.log(obj.hasOwnProperty("ame"));

//14------
//is method check both property value are same or not

// const obj = {
//     name:"meet"
// }
// const obj1 = {
//     name:"meet"
// }
// console.log(Object.is(obj,obj))
// console.log(Object.is(obj,obj1))

//15 isextensible()---it is check if obj are allow to add new prop or not

// let empty = {}
// console.log(Object.isExtensible(empty))
// // if we do prevent so it is now allow to add in it
// Object.preventExtensions(empty)
// console.log(Object.isExtensible(empty))

//16
//frozen -- method check new obj is freese or not

// const obj = {
//     name:"meet"
// }
// console.log(Object.isFrozen(obj))
// Object.preventExtensions(obj)
// console.log(Object.isFrozen(obj))
// Object.freeze(obj)
// console.log(Object.isFrozen(obj))

//17
//is sealed method checked obj seal or not 

// const obj = {
//  name:"meet"

// }
// Object.preventExtensions(obj);
// console.log(Object.isSealed(obj))

// Object.defineProperty(obj,"name",{
  
//     configurable:false
// })
// console.log(Object.isSealed(obj))
// //using seal method
// Object.seal(obj)
// console.log(Object.isSealed(obj))

//18 ----
//keys method givw the array of enurable property name in array
// const obj = {
//     name:"meet",
//     age:19,
//       2:34
// }
// Object.defineProperties(obj,{
//     name:{
//         enumerable:false
//     }
// })
// console.log(Object.keys(obj))

//19 ------
// prevent extensions are prevent to add new property in to obj
// const obj = {
//     name:"meet"
// }
// Object.preventExtensions(obj)
// obj.id = 23;
// console.log(obj)

//20
// is enurable or not property
// const obj = [2,3,4,5]
// const a = obj.propertyIsEnumerable(0)
// console.log(a)
// const obj1 = {
//     name:"meet"
// }
// Object.defineProperty(obj1,"id",{
//     value:23,
//     enumerable:true
// })
// const b = obj1.propertyIsEnumerable("id")
// console.log(b)

//21
//seal method this stop the new property to the object and makes all property non configrable
const obj = {
    name:"meet"
}
Object.seal(obj)

const arr = [2,3,4,5,6]
// console.log(arr.reduce((total,em)=>total+em,0))
// const a = arr.unshift(7)
// console.log(arr)
const obj = {}
console.log(arr.map(e=>{
    return {'i':e}
}))

function map1(e){
    console.log(e)
}

const fondArry = [1,2,3,4,5,6,5,7,8];
console.log(fondArry.find(e=>(e==5)))

const fAr = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},

]
console.log(fAr.find((e)=>e.id==5))

// const data =[
//     {roll_no :1, name:'Meet', Mo:'9874563210'},
//     {roll_no :2, name:'veet', Mo:'5698741230'},
//     {roll_no :3, name:'heet', Mo:'8574962230'}
// ]

// const data1 = [ {roll_no:43, name:'teet', Mo:'7896541230'}]


// // const filterData = data.filter(e=>(e.roll_no==2))
// // console.log('filterData::>', filterData)
// // const filterName = data.map(e=>e.name)
// // console.log("filterName: ",filterName)



// data.forEach((itm) => {console.log('itm', itm)});
// console.log('dataaaa :>> ', dataaaa);
// const data =[
//     {roll_no :1, name:'Meet', Mo:'9874563210'},
//     {roll_no :2, name:'veet', Mo:'5698741230'},
//     {roll_no :3, name:'heet', Mo:'8574962230'}
// ]

// const data1 = [ {roll_no:43, name:'teet', Mo:'7896541230'}]


// // const filterData = data.filter(e=>(e.roll_no==2))
// // console.log('filterData::>', filterData)
// // const filterName = data.map(e=>e.name)
// // console.log("filterName: ",filterName)



// // data.forEach((itm) => {console.log('itm', itm)});
// // console.log('dataaaa :>> ', dataaaa);

// const pushdata = data.push(data1)
// console.log(data)

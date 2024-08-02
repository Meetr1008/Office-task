import "./App.css";
import Counter from "./Use.js";
import Mybtn1 from "./BTn";
import {useState} from "react";

function Mybtn() {
  return <h2>Hello world</h2>;
}
let displaydata;
const a = 5;

function handlebtn() {
  alert("hello world");
}

// if(a>9){
//   displaydata =  <Mybtn1/>
// }else{
//   displaydata = <Mybtn/>
// }
const product = [
  {
    name: "audi",
    no: 1,
    isColor: false,
  },
  { name: "bmw", no: 2, isColor: true },
  { name: "kia", no: 3, isColor: false },
];
//  const newline = "<br/ >"
// doubt in map br
const li1 = product.map((e) => e.name + "<br>");
const li = product.map((e) => (
  <li key={e.no} style={{ color: e.isColor ? "blue" : "red" }}>
    {e.name}
  </li>
));

const obj = {
  name: "virat",
  age: 20,
  size: "200px",
  imgurl:
    "https://images.mid-day.com/images/images/2021/jun/Virat-Kohli-two-june_d.jpg",
};



function App() {
  const [count,setcount] = useState(0);
  function handlecount(){
  setcount(count+1)
//-----start
}


const [counter,setcounter] = useState(0);
function handlecount1(){
  setcounter(counter+1)

}

const [val,setval] = useState("this is first txt")
function changeval(){
  setval("this is second text")
}



  return (
    <div>
     <h2>Count:{counter}</h2>
     <button onClick={handlecount1}> Click me</button>
     <textarea onChange={changeval} value={val}></textarea>
     {/* <input type="text" value={val}></input> */}
     <button onClick={changeval}>For input change the value</button>
      {/* <button onClick={handlecount} > Clicked {count}</button> */}
      {/* <Counter count={count} onClick={handlecount}/> */}
      {/* <Counter count={count} onClick={handlecount}/> */}
      

      {li1}
      <ul>{li}</ul>
      <h1>{obj.name}</h1>
      {displaydata}
      {/* using ternery oprator */}
      <>{a > 9 ? <Mybtn1 /> : <Mybtn />}</>
      <button onClick={handlebtn}>Click me</button>
      <img
        src={obj.imgurl}
        className="img"
        alt={"This is a photo of" + obj.name}
        style={{ height: obj.size, width: obj.size }}
      />


    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  function hanndlecount() {
    setcount(count + 1);
  }
  function handlecountminas() {
    setcount(count - 1);
  }

  const [text, settext] = useState("");

  function handletext() {
    const a = document.getElementById("demo").value;
    settext(a);
  }
  //--------------------------------------

  const [simpletxt, setsimpletxt] = useState("");

  function handleupercase() {
    const normaltext = document.getElementById("demo1").value;

    setsimpletxt(normaltext.toUpperCase());
  }

  function handlelowercase() {
    const lower = document.getElementById("demo1").value.toLowerCase();
    setsimpletxt(lower);
  }

  //toggle-------------------

  const [style, setstyle] = useState("light");

  function showtoggle() {
    console.log("you just clicked");

    setstyle("light");
  }
  function hidetoggle() {
    setstyle("dark");
  }

  ///-----char counte-----

  const [counter, setcounter] = useState(0);
  function showcount() {}

  function showcounter1() {
    const str = document.getElementById("count").value;
    const x = str.split("");
    setcounter(x.length);
  }

  const [clr, setclr] = useState("");

  function clrchange() {
    setclr("red");
  }
  function clrchange1() {
    setclr("yellow");
  }
  function clrchange2() {
    setclr("blue");
  }






  const arr = ["virat kohli", "dipko", "dinesh", "nirav", "maxwell"];
  const [filterd, setfilterd] = useState(arr);

  function filterdata(e) {
   console.log(e.target.value)
    setfilterd(e.target.value)

  
  }

  const updatearr = arr.filter(e=>(
    e.includes(filterd)
  ))

  const [todo ,settodo] = useState("")


  function handletodo(e){
    // settodo(e.target.value)

  }



  function additem(){
    const a = document.getElementById("todo").value;
   {settodo(a)}
    console.log('clicked')
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={hanndlecount}>Click me to +</button>
      <button onClick={handlecountminas}>click me to -</button>
      <br></br>
      <br></br>
      <h1>Control input field</h1>
      Text:
      <input type="text" id="demo" onChange={handletext} />
      <br></br>
      <br></br>
      here your text:{text}
      {/* -------------------------------------------------------------- */}
      <h1>Input field Function </h1>
      Text:
      <input type="text" id="demo1" />
      <br></br>
      <br></br>
      Your-Text-Is-Here:{simpletxt}
      <br></br>
      <button onClick={handleupercase}>UpperCase</button>
      <button onClick={handlelowercase}>LowerCase</button>
      <br></br>
      <br></br>
      <h1 id={style}>toggle-Visibility</h1>
      <button onClick={showtoggle}>Show</button>
      <button onClick={hidetoggle}>Hide</button>
      <br></br>
      <br></br>
      <h1>Char Counter</h1>
      Text:<input type="text" id="count" onChange={showcount}></input>
      <p>Your Char Count number is : {counter}</p>
      <button onClick={showcounter1}>Click Me</button>
      <h1>Color Switch</h1>
      <div className="clrswitch" id={clr}></div>
      <button onClick={clrchange}> Red</button>
      <button onClick={clrchange1}>Yellow</button>
      <button onClick={clrchange2}>blue</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>




      <h1>Filter Example</h1>
      Text: <input type="text" id="serchinput" onChange={filterdata}></input>
      <p>Your Final Out-put is:</p>
     {updatearr.map(item=>(
      <li key={item}>{item}</li>
     ))}

     <br></br>

     <h1>Add Remove Item Example</h1>
     <input type="text" id="todo" onChange={handletodo}></input>
     <button onClick={additem}>Add</button>
     <br></br>
     {todo}
     

      
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

import {
  changeColorBlue,
  changeColorRed,
  changeColorPink,
} from "./actions/index";

import changeName from "./reducers/ChangeName";

function App() {
  const var1 = "black";
  const disPatch = useDispatch();
  const myState = useSelector((state) => state.changeNumber);
  const myState1 = useSelector((state) => state.changeBackground);
  const myState2 = useSelector((state)=>state.changeName)

  return (
    <>
      <h1>hello this is redux example</h1>
      <div>
        <h1>Counter value is {myState} </h1>
        <br></br>
        <button
          onClick={() => {
            disPatch(incNumber());
          }}
        >     
          +
        </button>
        <span></span>
        <button
          onClick={() => {
            disPatch(decNumber());
          }}
        >
          -
        </button>

        <div
          style={{
            backgroundColor: myState1,
            width: "200px",
            height: "300px",
            marginLeft: "40px",
          }}
        ></div>
        <button
          style={{ marginLeft: "40px", marginTop: "40px" }}
          onClick={() => {
            disPatch(changeColorBlue());
          }}
        >
          {" "}
          Blue
        </button>
        <button
          style={{ marginLeft: "40px", marginTop: "40px" }}
          onClick={() => disPatch(changeColorRed())}
        >
          {" "}
          Red
        </button>
        <button
          style={{ marginLeft: "40px", marginTop: "40px" }}
          onClick={() => disPatch(changeColorPink())}
        >
          {" "}
          Pink
        </button>
      </div>
      <br></br>
      <div>
        <form>
          <lable>Name:</lable>
          <input type="text" onChange={()=>disPatch(changeName())}></input>
          <h3>YOur name is: {myState2} </h3>
        </form>
      </div>
    </>
  );
}

export default App;




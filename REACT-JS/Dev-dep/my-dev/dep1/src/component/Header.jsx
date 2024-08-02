// src/component/Header.js in dep1
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counterSlice1";




const Header = () => {

 


  // const counter = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // console.log("Dep1 Counter Value:", counter);
  return (
    <div>
      {/* <h1>This is header</h1>
   
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
     
    </div>
  );
};

export default Header;

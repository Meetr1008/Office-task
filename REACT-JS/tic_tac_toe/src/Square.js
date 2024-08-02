import { useState } from "react";

function Square(props) {

  return (
    <>
  
  <button className="square" onClick= {props.onsqrClick}><span className="span">
  {props.value}
    </span></button>
  
    </>
)}
export default Square;

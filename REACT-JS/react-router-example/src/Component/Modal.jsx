import { useNavigate } from "react-router-dom";
import "./Modal.css";
import { useState } from "react";
export function Modal() {
  const [my, setMy] = useState(false);

  const [name,setName] = useState("")


  var handleOn = () => {
    console.log("hello");
  };

  var handleSec = () => {
   window.location.href = "https://www.google.com/";
  };

  const handleClick = () => {
    if (!my) {
      handleOn();
      setMy(true);
    } else {
      handleSec();
    }
  };
  const navigate = useNavigate();
  return (
    <div className="modal-wrapper" onClick={() => navigate("/")}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>CONTENT</p>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Mark As complete
        </button>
        <br></br>
        <br></br>
        <label>What is your name</label>
        <br></br>
        Meet<input type="radio" name="name" onChange={(e)=>{setName(e.target.value)}} value={"meet"}></input><br></br>
        Nirav <input type="radio" name="name" onChange={(e)=>{setName(e.target.value)}} value={"nirav"}></input><br></br>
        <button onClick={()=>{
    
   if(name=="meet"){
    console.log("Correct your ans is right")
   }
   else{
    console.log("You are Wrong please try Again")
   }

        }}>Submit</button>
      </div>
    </div>
  );
}

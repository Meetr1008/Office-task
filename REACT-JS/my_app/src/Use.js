import {useState} from "react";

function Counter(props){

// const [count,setcount] = useState(0);

// function handlecount(){
//   setcount(count+1)
// }
// function handlecountminas(){
//     setcount(count-1)
// }

    return(

<>
{/* <button onClick={handlecount}>
    Counter is:{count}
</button> */}
{/* <button onClick={handlecountminas}>
    Counter is:{count}
</button> */}
{/* <h2>{count}</h2> */}
<button onClick={props.onClick}>Clicked {props.count}</button>





</>

    )
}



export default Counter;
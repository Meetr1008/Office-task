import { useNavigate } from "react-router";
import axios from "axios";
// import '../axios/get'
import authFetch from "../axios/get";
import { useEffect, useState } from "react";
// axios.defaults.headers.common['Accept'] = 'application/json'

function Meta() {

    const [joke,setJoke] = useState("how are you")
//   const url = "https://official-joke-api.appspot.com/jokes/random";
const url = authFetch
  const fetchData = async () => {
    try {
    //   const res = await axios.get(url);
    const res = await authFetch()
      const data = res.data
      console.log(data);    
      setJoke(data.setup)
    } catch (error) {
      console.log(error);
    }
  };
 

    //   useEffect(() => {
    //     fetchData();
    //   }, []);
  const navigate = useNavigate();

  function gotopage() {
    navigate("/about");
  } 

  return (
    <>
      <h2>This is our home page content</h2>
      <br></br>
       <button onClick={gotopage}>Go to about page</button>
       

      <h3>Jokes Site</h3>
      <button onClick={()=>{ setTimeout(fetchData,3000)}}>Random Joke</button>
      <p>{joke}</p>
    </>
  );
}

export { Meta };

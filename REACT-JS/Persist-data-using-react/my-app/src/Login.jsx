import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [myData, setMyData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3032/users");
    setMyData(res.data);
    console.log(res.data);
  };

  const myUserData = myData.map((e) => {
    const myVal = Object.values(e)[1];

    return myVal;
  });

  console.log(myUserData);

  useEffect(() => {
    getData();
  }, []);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (myUserData.some((e) => e.email === email && e.pass === pass)) {
      alert("you have been logged in");
      window.location.href = "https://www.w3schools.com/";
    } else {
      alert("please enter the correct email and password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>THis is login page</h1>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

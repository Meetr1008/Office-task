import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { instance } from "./demo";
const MyApi = () => {
  const [data1, setData1] = useState([]);
  async function getUser() {
    try {
      const response = await instance.get("/");
      setData1(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleClk = () => {
    console.log("my data are >>> ", data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <button onClick={handleClk}>Click me</button>

      {data1.map((e) => (
        <li key={e.id}>{e.title}</li>
      ))}
    </div>
  );
};

export default MyApi;

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";


function App() {


  return (
    <>
      <Header />
      <Login/>  
     
    </>
  );
}

export default App;




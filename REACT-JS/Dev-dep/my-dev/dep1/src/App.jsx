// src/index.js in dep1
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./component/store";
import MyApi from "./component/MyApi";

store.subscribe(() => {
  console.log("State updated:", store.getState());
});
const App = () => (
  <Provider store={store}>

        <Navbar />
     
   
    {/* <Header /> */}

    {/* <MyApi/> */}
  </Provider>
);  
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

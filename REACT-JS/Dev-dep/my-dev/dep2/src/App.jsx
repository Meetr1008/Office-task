import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "dep1/store";
import "./index.css";
import Header from "dep1/Header";
import Navbar from "dep1/Navbar";
import MyApi from "dep1/MyApi";
import store1 from "./store1";
store.subscribe(() => {
  console.log("State updated:", store.getState());
});
const App = () => (
  <>
    {/* <Provider store={store1}>
      <Provider store={store}> */}
    {/* <Header /> */}
    <Navbar />
    {/* </Provider>
    </Provider>
<MyApi/> */}
    {/* </Provider> */}
  </>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

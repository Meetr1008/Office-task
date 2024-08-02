import logo from "./logo.svg";
import "./App.css";
import "./axios/get";
import React, { Suspense } from "react";
import Home from "./Component/Home";
import Login from "./Component/About";
import Error from "./Component/Error";
import Contact1 from "./Component/Contact1";
import Header from "./Component/header";
import { Meta } from "./Component/Meta-home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Box from "@mui/material/Box";
import { Modal } from "./Component/Modal";
import Contact from "./Component/Contact";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
// const About = React.lazy(() => import("./Component/About"));
// const Contact = React.lazy(() => import("./Component/Contact"));

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Meta />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}>
              <Route path="/contact1" element={<Contact1 />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Header />
        {/* <Suspense
          fallback={
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          } */}
        {/* > */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Modal/" element={<Modal />} />
          <Route path="/contact/contact1" element={<Contact1 />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </>
  );
}

export default App;

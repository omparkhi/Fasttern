import React from "react"; //bg-gradient-to-bl from-purple-400 via-blue-200 to-purple-400
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () =>{
  return (
    // <div className=" min-h-screen ">
    //     <h1 className=" text-4xl font-bold text-blue-600">FASTTERN!</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
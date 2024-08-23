import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Postform from "./Components/Postform";
// import PostList from "./Components/PostList";
import SignUp from  "./Components/SignUp";
import SignIn from  "./Components/SignIn";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import LogOut from "./Components/LogOut";
// import CreatePost from "./Components/CreatePost";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

 function App() {
   
  const[isLogin, setIsLogin] = useState(!!localStorage.getItem("token"))


  const [newPost, setNewpost] = useState(true);

  function updateNewPost() {
    setNewpost((prev) => !prev);
 }
  return (
    
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signIn" element={isLogin?<Navigate to={"/HomePage"}></Navigate>:<SignIn setIsLogin={setIsLogin}></SignIn>}></Route>
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/HomePage" element={isLogin? <HomePage setIsLogin={setIsLogin}></HomePage>:<Navigate to={"/signin"}></Navigate>}></Route>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FetchPosts from "./components/FetchPost/fetchPost";
import Register from "./components/RegistrationForm/registrationForm";
import NavBar from "./components/Navbar/Navbar";
import Login from "./components/LoginForm/loginForm";
import SelectedPost from "./components/SelectedPostView/SelectedPostView";

import "./App.css";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      console.log(token);
    }
  }, []);

  return (

    <>
    {selectedPostId ? (
      <SelectedPost selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} allPosts={allPosts} />
    ):(
    

    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<FetchPosts allPosts={allPosts} setAllPosts={setAllPosts} setSelectedPostId={setSelectedPostId}/>}
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
    )}
      </>
    
  );
}

export default App;

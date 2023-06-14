import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FetchPosts from "./components/FetchPost/fetchPost";
import Register from "./components/RegistrationForm/registrationForm";
import NavBar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<FetchPosts allPosts={allPosts} setAllPosts={setAllPosts} />}
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/> */}
      </Routes>
  </div>
  );
}

export default App;

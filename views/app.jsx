import { useState } from "preact/hooks";
// import preactLogo from './assets/preact.svg'
import "./styles/common.scss";
import "./styles/app.scss";

import Router from "preact-router";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import React, { useEffect } from "preact/compat";
import Navigation from "./components/Navigation";
import Login from "./pages/auth/Login";
import { fetchCurrentAuth } from "./store/actions";
import useStore from "./store/useStore";
import AddPost from "./pages/admin/AddPost";
import ACTION_TYPES from "./store/types";

export function App() {
	
  const [count, setCount] = useState(0);
  
  const [state, dispatch] = useStore();
  
  useEffect(() => {
    fetchCurrentAuth(dispatch);
    let theme = localStorage.getItem("theme");
    dispatch({
      type: ACTION_TYPES.TOGGLE_THEME,
      payload: theme === "true",
    });
  }, []);
  
  
  return (
    <div>
      <Navigation />
      <Router>
        <HomePage path="/" />
        <HomePage path="/:categoryName" />
        <AboutPage path="/about" />
        <Login path="/login" />
        <AddPost path="/add-post" />
      </Router>
    </div>
  );
}



import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
import './styles/common.scss'
import './styles/app.scss'

import Router from "preact-router";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import React from "preact/compat";
import Navigation from "./components/Navigation";
import Login from "./pages/auth/Login";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

        <Navigation />

        <Router>
            <HomePage path="/" />
            <AboutPage path="/about" />
            <Login path="/login" />
          </Router>
    </div>
  )
}

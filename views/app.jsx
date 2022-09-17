import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
import './app.css'
import Router from "preact-router";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Link} from "preact-router/match";
import React from "preact/compat";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <Router>
            <HomePage path="/" />
            <AboutPage path="/about" />
          </Router>
    </div>
  )
}

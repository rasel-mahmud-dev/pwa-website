import React from "preact/compat";
import { useState } from "preact/hooks";

import "./styles.scss"

const Login = () => {
  const [state, setState] = useState({
    data: { email: "", password: "" },
  });

  async function handleSubmit(e) {
    e.preventDefault();
   
    let res = await fetch("/api/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        data: JSON.stringify(state.data)
      }
    })
    res = await res.json();
    console.log(res);
  }

  return (
    <div className="login-form" >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Admin Email"
          value={state.data.email}
        />
        <br/>
        
        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          value={state.data.password}
        />
        <br/>
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

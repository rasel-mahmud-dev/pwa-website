import React from "preact/compat";
import { useState } from "preact/hooks";

import "./styles.scss"
import {handleLoginAction} from "../../store/actions";
import useStore from "../../store/useStore";

const Login = () => {
  
  const [app, dispatch]= useStore();
  
  
  const [state, setState] = useState({
    data: { email: "", password: "" },
  });

  function handleChange(e){
    setState({
      ...state,
      data: {
        ...state.data,
        [e.target.name]: e.target.value
      }
    })
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    handleLoginAction(dispatch, state.data, ()=>{})
    
  }
  

  return (
    <div className="login-form card" >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          className="input"
          placeholder="Admin Email"
          onChange={handleChange}
          value={state.data.email}
        />
        <br/>
        
        <input
          type="password"
          name="password"
          className="input"
          onChange={handleChange}
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

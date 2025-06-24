
import { useState } from 'react';
import './App.css';
function App() {
  const[isLogin,setIsLogin]=useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active': ""} onClick={()=>{setIsLogin(true)}}>Login</button>
          <button className={!isLogin ? 'active': ""} onClick={()=>{setIsLogin(false)}}>SignUp</button>
        </div>
        {isLogin ? <>
        <div className="form">
          <h2>Login form</h2>
          <input type="email" placeholder='Enter Email' />
          <input type="passoword" placeholder='Enter Password'/>
          <a href="#">Forgot Password?</a>
          <button>Login</button>
          <p>Not a member?  <a href="#" onClick={()=>{
            setIsLogin(false)}}>SignUp</a></p>
        </div>
        </>:<>
        <div className="form">
          <input type="email" placeholder='Enter Email'/>
          <input type="password"placeholder='Enter Password'/>
          <input type="password"placeholder='Confirm Password'/>
          <button>SignUp</button>
          </div></>}
      </div>
    </div>
  );
}

export default App;

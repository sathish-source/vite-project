
import './mylogin.css';

const Login = () => {


  return (
    <div className="login-container">
      <form className="login-form" >
        <h1>Login</h1>
        <div className="form-group">
          <input className='input-details' placeholder='Username' type="text" id="username" required />
        </div>
        <div className="form-group">
          <input className='input-details' placeholder='Password' type="password" id="password" required />
          <a className='pass-forget'>Forget Password?</a>
        </div>
        
        <center><button type="submit">Login</button></center>
        <a className='signup'>SignUp</a>
      </form>
    </div>
  );
};

export default Login;

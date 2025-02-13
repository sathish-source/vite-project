
import './signup.css';

const SignUp = () => {


  return (
    <div className="signup-container">
      <form className="signup-form" >
        <h1>SignUp</h1>
        <div className="form-group">
          <input className='input-details' placeholder='Username' type="text" id="username" required />
        </div>
        <div className="form-group">
          <input className='input-details' placeholder='Email' type="email" id="email" required />
        </div>
        <div className="form-group">
          <input className='input-details' placeholder='Password' type="password" id="password" required />
          <input className='checkbox' type="checkbox" required/> <label className='check-label'>agree terms & conditions</label> 
        </div>
        <center><button type="submit">SignUp</button></center>
        <a className='login'>Login</a>
      </form>
    </div>
  );
};

export default SignUp;

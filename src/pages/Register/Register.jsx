import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimationData from '../../assets/lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
const Register = () => {
    
   const {createUser} = useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault();
        const from =e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password);
        //password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        const validatePassword = (password) => {
          if (password.length < 6) {
            return "Password must be at least 6 characters long.";
          }
          if (!/[A-Z]/.test(password)) {
            return "Password must include at least one uppercase letter.";
          }
          if (!/[a-z]/.test(password)) {
            return "Password must include at least one lowercase letter.";
          }
          if (!passwordRegex.test(password)) {
            return "Password does not meet the required criteria.";
          }
          return "Password is valid.";
        };
        
        // Example usage
        console.log(validatePassword("Password")); // "Password is valid."
        console.log(validatePassword("passw"));    // "Password must be at least 6 characters long."
        console.log(validatePassword("password")); // "Password must include at least one uppercase letter."
        console.log(validatePassword("PASSWORD")); // "Password must include at least one lowercase letter."
        
     createUser(email,password)
     .then(result=>{
        console.log(result.user);
     })
     .catch(error =>{
        console.log(error.message);
     }
     )
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
     <Lottie animationData={registerAnimationData}></Lottie>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form
      onSubmit={handleRegister} className="card-body">
      <h1 className=" ml-4 mt-4text-5xl font-bold">Register now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;
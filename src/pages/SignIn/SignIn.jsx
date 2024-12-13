import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimationData from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signin page',location);
    const from  = location.state || '/';

    const handleSignIn = e =>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;
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
        
    signInUser(email,password)
     .then(result=>{
        console.log(result.user);
        navigate(from)
     })
     .catch(error =>{
        console.log(error.message);
     }
     )
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimationData} ></Lottie>
          
         </div>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <form
           onSubmit={handleSignIn} className="card-body">
           <h1 className=" ml-4 mt-4text-5xl font-bold">SignIn now!</h1>
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
               <button className="btn btn-primary">Login</button>
             </div>
           </form>
         </div>
       </div>
     </div>
    );
};

export default SignIn;
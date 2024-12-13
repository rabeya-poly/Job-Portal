import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import  AuthContext  from "../context/AuthContext/AuthContext";
import  logoIcon from '../../public/logoIcon.png'
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext)

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log('Successfully signed out');
      })
      .catch(error => {
        console.error('Failed to sign out:', error.message);
      });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/myApplications">My Applications</NavLink></li>
      <li><NavLink to="/addJob">Add Job</NavLink></li>
      <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
     
      {/* Add more links as needed */}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
       <div className='flex'> <a className="btn btn-ghost text-xl w-20">
         <Link to='/'> <img src={logoIcon} alt="" /></Link>
        
        </a>
        <h3 className='text-3xl'>Job Portal</h3></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal lg:gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignout} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/signIn">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

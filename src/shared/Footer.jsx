import React from 'react';
import  logoIcon from '../../public/logoIcon.png'


const Footer = () => {
    return (
  <div>
          <footer className="footer bg-neutral text-neutral-content p-10">
           <nav>
           <img src={logoIcon}></img>
            <p className='text-blue-400'>Job Portal</p>
            <p>Each month, more than 3 million<br></br> job seekers turn to website 
                in their<br></br> search for work, making over 
                140,000 <br></br>
                applications every single day</p>
           </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </div>
    );
};

export default Footer;
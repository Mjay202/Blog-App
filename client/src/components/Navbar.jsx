import React from 'react';
import logo from '../assets/jayxinblog.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className='links' >
            <Link to='/?cat=art' className="link">
              <h6>ART</h6>
            </Link>
            <Link to='/?cat=science' className="link">
              <h6>SCIENCE</h6>
            </Link>
            <Link to='/?cat=technology' className="link">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link to='/?cat=movies' className="link">
              <h6>MOVIES</h6>
            </Link>
            <Link to='/?cat=politics' className="link">
              <h6>POLITICS</h6>
            </Link> 
            <Link to='/?cat=lifestyle' className="link">
              <h6>LIFESTYLE</h6>
            </Link>
            <span> MARY</span>
            <span>Logout</span>
            <span className='write'>
              <Link className='link' to='/create'>WRITE</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
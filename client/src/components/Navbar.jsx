import React, { useContext } from 'react';
import logo from '../assets/jayxinblog.svg';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const Navbar = () => {

    const navigate = useNavigate()
    const { logout, currentUser } = useContext(AuthContext);
    const loggedOut = () => {
      logout();
      navigate("/");
    }
  return (
    <>
      <div className="navbar">
        <div className="container">
          <Link className='link' to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          </Link>
          <div className="links">
            <Link to="/?cat=art" className="link">
              <h6>ART</h6>
            </Link>
            <Link to="/?cat=science" className="link">
              <h6>SCIENCE</h6>
            </Link>
            <Link to="/?cat=technology" className="link">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link to="/?cat=movies" className="link">
              <h6>MOVIES</h6>
            </Link>
            <Link to="/?cat=politics" className="link">
              <h6>POLITICS</h6>
            </Link>
            <Link to="/?cat=lifestyle" className="link">
              <h6>LIFESTYLE</h6>
            </Link>

            {currentUser ? (
              <>
                <span>{ currentUser.uname}</span>
                <span onClick={loggedOut}>Logout</span>
              </>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            <span className="write">
              <Link className="link" to="/create">
                WRITE
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
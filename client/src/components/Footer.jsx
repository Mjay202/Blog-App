import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Blog by: <h4>Dev JAYXIN</h4>
      </span>
    </footer>
  );
}

export default Footer
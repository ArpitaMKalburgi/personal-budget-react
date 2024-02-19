import React from 'react';
import '../App.css';

import{
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu" role="navigation"
    aria-label="Main menu"
    itemScope
    itemType="https://schema.org/SiteNavigationElement">
      
        <ul>
            
            <li><Link itemprop ="url" to="/" aria-label="Go to Homepage">Home</Link></li>
            
            <li><Link itemprop ="url" to="/about" aria-label="Learn About Our App">About</Link></li>
            
            <li><Link itemprop ="url" to="/login" aria-label="Log into Your Account">Login</Link></li>
            
            <li><Link to="#main">Skip To Main Content</Link></li>
        </ul>
    </nav> 
  );
}

export default Menu;

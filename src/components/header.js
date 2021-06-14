import React from 'react';
import logoImg from '../assets/imgs/logo.png';
import userSvg from '../assets/svg/user.svg';
import heartSvg from '../assets/svg/heart.svg';
import cartSvg from '../assets/svg/cart.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(){

    return (
       <div className="">
                             
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/"><div className="logo">
                  <img src={logoImg} alt="logo" />
                </div></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/man">Man</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/woman">Woman</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/counter">Counter</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link hv-down" to="/form">postForm</Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <img className="nav-link" src={userSvg} alt="user" />
                  </li>
                  <li className="nav-item">
                    <img className="nav-link" src={heartSvg} alt="heart" />
                  </li>
                  <li className="nav-item">
                    <img className="nav-link btn-carts" src={cartSvg} alt="cart" />
                  </li>
                </ul>
              </div>
            </div>
        </nav>
       </div>
    )
}

export default Header;
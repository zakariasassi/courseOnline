import React from "react";
import {Link} from 'react-router-dom'

import './navbar.css'

function Navbar () {


    return (
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-cls">
  <div className="container-fluid">
     <img  src={'/images/google.png'} style={{ width:'auto' , height:40 , marginRight:20    }}  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-cls ">
        <li className="nav-item ">
          <Link className="nav-link active " aria-current="page" to={"/signup"} >Sginup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/counter"}>Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/xls"}>Xls</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/posts"}>Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/storage"}>Storage</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </>
    )
}


export default Navbar
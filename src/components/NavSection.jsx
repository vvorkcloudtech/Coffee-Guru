import React from 'react';
import { Link } from 'react-router-dom';

const NavSection = (props)=> {
  var res= props.nav.map((obj, index)=>{
  
      return <div key={index}>
  <div>
      <h1 className="site-heading text-center text-white d-none d-lg-block">
      <video autoPlay="autoPlay" muted="muted" loop="loop" id="myVideo">
  <source src="../images/video.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video><div className="vid">
        <span className="site-heading-upper text-primary mb-3">{obj.nav.headinguper}</span>
        <span className="site-heading-lower">{obj.nav.headinglower}</span>
        </div>
      </h1>
  <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active px-lg-4">
                <Link className="nav-link text-uppercase text-expanded" to="/home">Home</Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link text-uppercase text-expanded" to="/about">About</Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link text-uppercase text-expanded" to="/products">Products</Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link text-uppercase text-expanded" to="/store">Store</Link>
              </li>
              <li className="nav-item px-lg-3">
                <Link className="nav-link text-uppercase text-expanded" to="/login">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
  </div>
  
  </div>
  })
  
  return(
      <div>
          {res}
      </div>
  )
  }
  export default NavSection;  
import React from "react"
import image from "../me.jpeg"
import '../App.css';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  {/* <a className="navbar-brand" href="#"><img src={image} alt="logo" /></a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
    <li className="nav-item active">
        <a className="nav-link" href="#">Projects <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About me <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Resume <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    
  </div>
</nav>
  )
}

export default Navbar

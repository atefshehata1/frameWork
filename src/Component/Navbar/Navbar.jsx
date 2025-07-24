import React from 'react'
import { Link, Router } from 'react-router-dom'
import './Navbar.css'
import frame from '../../../public/vite.svg'
export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg bgBlack  ">
  <div className="container my-4">
    <img src={frame}   style={{width:"40px", height:"40px"}} alt="" />
    <Link className="navbar-brand" to={'/'} >Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
        <li className="nav-item  mx-3 ">
          <Link className="nav-link active hovering" aria-current="page" to ="/about" >About</Link>
        </li>
        <li className="nav-item  mx-3 ">
          <Link className="nav-link  hovering " to="/Portofolio">Portofolio</Link>
        </li>
        <li className="nav-item  mx-3 ">
          <Link className="nav-link hovering " to="/Contact" >Contact</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
  
  </>
  )
}

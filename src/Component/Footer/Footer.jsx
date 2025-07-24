import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-Container  '>

      <div>
        <h3> LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>

      <div>
        <h3>AROUND THE WEB</h3>
        <div className="social-icons">
          <a href="#" className="icon" style={{ color: '#fff', backgroundColor: '#007bff' }}><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon" style={{ color: '#fff', backgroundColor: '#1da1f2' }}><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon" style={{ color: '#fff', backgroundColor: '#0077b5' }}><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="icon" style={{ color: '#fff', backgroundColor: '#28a745' }}><i className="fas fa-globe"></i></a>
        </div>
      </div>

      <div>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created
           by Route</p>
        </div>

        </div>
        <div className='Footer-Copyright'>
          <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}

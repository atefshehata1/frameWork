import React from 'react';
import './Contact.css'; 
import { FaUser, FaEnvelope, FaLock, FaHashtag } from 'react-icons/fa'; // icons

export default function Contact() {
  return (

       <div className='container d-flex flex-column'>

        <h2 className='fw-bold fs-2 my-3 text-center text-white'> conatct section </h2>
        <div className='divider d-flex justify-content-center align-items-center '>
          <div className='line' style={{backgroundColor:'#ffffffff'}}></div>
          <i className='fa-solid fa-star mx-4' style={{color:'#ffffffff'}}></i>
          <div className='line' style={{backgroundColor:'#ffffffff'}}></div>
        </div>
        


    <div className="contact-page min-vh-100 d-flex justify-content-center align-items-center  ">
      <div className="container p-5 bg-white rounded shadow"
       style={{ maxWidth: "600px" }}>
        <form>
          {/* User Name */}
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-bold">
              <FaUser className="me-2 text-primary" />
              User Name:
            </label>
            <input type="text" className="form-control" id="userName" placeholder="Enter your name" />
          </div>

          {/* User Age */}
          <div className="mb-3">
            <label htmlFor="userAge" className="form-label fw-bold">
              <FaHashtag className="me-2 text-primary" />
              User Age:
            </label>
            <input type="number" className="form-control" id="userAge" placeholder="Enter your age" />
          </div>

          {/* User Email */}
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label fw-bold">
              <FaEnvelope className="me-2 text-primary" />
              User Email:
            </label>
            <input type="email" className="form-control" id="userEmail" placeholder="Enter your email" />
          </div>

          {/* User Password */}
          <div className="mb-4">
            <label htmlFor="userPassword" className="form-label fw-bold">
              <FaLock className="me-2 text-primary" />
              User Password:
            </label>
            <input type="password" className="form-control" id="userPassword" placeholder="Enter your password" />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-dark px-4">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

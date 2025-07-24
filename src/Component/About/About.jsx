import React from 'react'
import './About.css'

export default function About() {
 
    
  return (
<>
   <section className="about-section d-flex justify-content-center align-items-center text-center text-dark">
  <div className="container d-flex flex-column align-items-center">

    {/* العنوان والنجمة */}
    <h2 className="fw-bold fs-2 ">ABOUT COMPONENT</h2>

    <div className="divider d-flex justify-content-center align-items-center my-4">
      <div className="line" style={{backgroundColor:'#f5f5f5ff'}}></div>
      <i className="fa-solid fa-star mx-3 " style={{color:'#ffffffff'}}></i>
      <div className="line" style={{backgroundColor:'#ffffffff'}}></div>
    </div>

    {/* الفقرات */}
    <div className="row justify-content-center">
      <div className="col-md-5">
        <p className="lead ">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
      <div className="col-md-5">
        <p className="lead">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>

  </div>
</section>


</>
  )
}

import React from 'react'
import  Avatar from "../../assets/imgi_1_avataaars.svg"
import './Home.css'
export default function Home() {
  return (
     <div className="flex  flex-col items-center justify-center min-h-screen text-white text-center  H100 "
     style={{ backgroundColor:"#5b49a2"}}>
      <div className="rounded-full overflow-hidden w-48 h-48   border-4 border-white">
        <img
          src={Avatar} 
          alt="Avatar"
          className="object-cover "
          style={{ width:"200px" , height:"200px" , marginTop:"100px" , marginBottom:"20px"}}
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4  ">START FRAMEWORK</h1>
      <div className="divider d-flex align-items-center  justify-content-center  my-4">
        <div className='line' style={{backgroundColor:'#fff'}}></div>
        <i className='fa-solid fa-star mx-3' style={{color:'#fff'}}></i>
        <div className='line' style={{backgroundColor:'#fff'}}></div>
      
       
      </div>
      <p className="text-lg md:text-xl">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}

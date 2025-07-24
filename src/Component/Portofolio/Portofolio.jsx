import React, { useState } from 'react';
import './Portofolio.css';
import card1 from '../../assets/portfolio/imgi_1_poert1.png';
import card2 from '../../assets/portfolio/imgi_2_port2.png';
import card3 from '../../assets/portfolio/imgi_3_port3.png';

export default function Portofolio() {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (img) => setPopupImage(img);
  const closePopup = () => setPopupImage(null);

  return (
    <div className='portofolio H100 min-h-screen'>
      <div className='container d-flex flex-column text-center align-items-center'>
        {/* name & Star */}
        <h2 className='fw-bold fs-2 my-3'> portfolio component </h2>
        <div className='divider d-flex justify-content-center align-items-center'>
          <div className='line' style={{backgroundColor:'#ffffffff'}}></div>
          <i className='fa-solid fa-star mx-4' style={{color:'#ffffffff'}}></i>
          <div className='line' style={{backgroundColor:'#ffffffff'}}></div>
        </div>

        {/* images */}
        <div className='row my-2 g-5  ms-5'>

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card position-relative" style={{ width: "20rem" }}>
              <div className="layout d-flex justify-content-center align-items-center" onClick={() => openPopup(card1)}>
                <span className="plus-icon">+</span>
              </div>
              <img src={card1} className="card-img-top" alt="card1" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card position-relative" style={{ width: "20rem" }}>
              <div className="layout d-flex justify-content-center align-items-center" onClick={() => openPopup(card2)}>
                <span className="plus-icon">+</span>
              </div>
              <img src={card2} className="card-img-top" alt="card2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card position-relative" style={{ width: "20rem" }}>
              <div className="layout d-flex justify-content-center align-items-center" onClick={() => openPopup(card3)}>
                <span className="plus-icon">+</span>
              </div>
              <img src={card3} className="card-img-top" alt="card3" />
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-md-4">
            <div className="card position-relative" style={{ width: "20rem" }}>
              <div className="layout d-flex justify-content-center align-items-center" onClick={() => openPopup(card1)}>
                <span className="plus-icon">+</span>
              </div>
              <img src={card1} className="card-img-top" alt="card1" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div className="card position-relative" style={{ width: "20rem" }}>
              <div className="layout d-flex justify-content-center align-items-center" onClick={() => openPopup(card2)}>
                <span className="plus-icon">+</span>
              </div>
              <img src={card2} className="card-img-top" alt="card2" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4">
            <div className="card position-relative" style={{ width: "20rem" }}>
              <div className="layout d-flex justify-content-center align-items-center" onClick={() => openPopup(card3)}>
                <span className="plus-icon">+</span>
              </div>
              <img src={card3} className="card-img-top" alt="card3" />
            </div>
          </div>

        </div>
      </div>

      {/* Popup Overlay */}
      {popupImage && (
        <div className="popup" onClick={closePopup}>
          <img src={popupImage} alt="popup" className="popup-img" />
        </div>
      )}
    </div>
  );
}

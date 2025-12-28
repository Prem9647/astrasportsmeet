import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const Images = () => {
  const [livePhotos, setLivePhotos] = useState([]);

  useEffect(() => {
    // Fetch live photos from the API
    api.get("/api/admin/live-photos")
      .then(res => res.json())
      .then(photos => setLivePhotos(photos));
  }, []);
  return (
    <>
{/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logos-container">
            <img src="images/logos/rotary with unit.png" alt="Rotary with Unit Logo" className="hero-logo" />
            <img src="images/logos/rotaract with see.png" alt="Rotaract with See Logo" className="hero-logo" />
          </div>
          <div className="district-info">
            <h5>ROTARACT DISTRICT ORGANISATION 2025-26</h5>
            <h5>ROTARY INTERNATIONAL DISTRICT 3206</h5>
          </div>
          <div className="main-logo-container">
            <img src="images/logos/ASTRA 3D Effect.png" alt="Brahmastra Main Event Logo" className="main-event-logo" />
          </div>
          <div className="host-club">
            <h6>HOSTED BY: ROTARACT CLUB OF GCT COIMBATORE | ROTARACT CLUB OF COIMBATORE IGNITE</h6>
          </div>
        </div>        
      </section>



      {/* Live Photos Section */}
      {livePhotos.length > 0 && (
        <section>
          <div className="container">
            <div className="section-title">
              <h2 style={{ color: 'white' }}>Event Gallery</h2>
              <p>Latest moments from the ongoing events</p>
            </div>
            
            <div className="gallery-container">
              {livePhotos.map((photo, index) => (
                <div key={photo._id || index} className="gallery-item">
                  <div className="gallery-image" style={{ 
                    backgroundImage: `url('${process.env.REACT_APP_API_URL || 'http://localhost:5000'}${photo.imageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div className="photo-timestamp">
                    {new Date(photo.timestamp).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Images;
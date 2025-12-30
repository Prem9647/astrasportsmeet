import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images from the API
    setLoading(true);
    api.get("/api/images")
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
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



      {/* Gallery Images Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: 'white' }}>Event Gallery</h2>
            <p>Latest moments from the ongoing events</p>
          </div>
          
          {loading ? (
            <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
              <p>Loading images...</p>
            </div>
          ) : images.length > 0 ? (
            <div className="gallery-container">
              {images.map((image, index) => (
                <div key={image._id || index} className="gallery-item">
                  <div className="gallery-image" style={{ 
                    backgroundImage: `url('${image.imageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  {image.title && (
                    <div className="photo-title">
                      {image.title}
                    </div>
                  )}
                  <div className="photo-timestamp">
                    {new Date(image.timestamp).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
              <p>No images available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Images;
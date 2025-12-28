import React from 'react';

const Contact = () => {
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

      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Contact Now</h2>
            <h3 style={{ color: 'white' }}>ASTRA<br/>Rotaract District Sports Meet</h3>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <h4>Rtr. Anusha S</h4>
              <p className="position">Event Chair</p>
              <div className="contact-info">
                <p className="phone">Phone Number: <a href="tel:+919629865112">9629865112</a></p>
                <p className="email">Email ID: <a href="mailto:rtranushasenthilraj@gmail.com">rtranushasenthilraj@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-card">
              <h4>Rtr. Lingesh B S</h4>
              <p className="position">Event Secretary</p>
              <div className="contact-info">
                <p className="phone">Phone Number: <a href="tel:+917010736036">7010736036</a></p>
                <p className="email">Email ID: <a href="mailto:rtrlingeshbalasubramanian@gmail.com">rtrlingeshbalasubramanian@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-card">
              <h4>Rtr. Kanika P</h4>
              <p className="position">Event Treasurer</p>
              <div className="contact-info">
                <p className="phone">Phone Number: <a href="tel:+919568471390">9568471390</a></p>
                <p className="email">Email ID: <a href="mailto:rtrkanika02@gmail.com">rtrkanika02@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-card">
              <h4>Rotaract Club of GCT Coimbatore</h4>
              <div className="contact-info">
                <p className="email">Email ID: <a href="mailto:racgctbc@gmail.com">racgctbc@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-card">
              <h4>Rotaract Club of Coimbatore Ignite</h4>
              <div className="contact-info">
                <p className="email">Email ID: <a href="mailto:rotaractclubofcoimbatoreignite@gmail.com">rotaractclubofcoimbatoreignite@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-card social-card">
              <h4>On all Socials</h4>
              <div className="contact-info">
                <p className="social-handle">@rotaract_district_3206</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
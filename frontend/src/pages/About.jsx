import React from 'react';

const About = () => {
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


      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-title">
            <h2 className="about-subtitle">The Legacy of the Arena</h2>
          </div>
          <div className="about-content">
            
            <h3 className="about-subtitle">Who We Are</h3>
            <p>The Rotaract Club of GCT Coimbatore and the Rotaract Club of Coimbatore Ignite are more than just organizations; we are the forgers of history. With a deep-rooted commitment to fellowship and excellence, our collaboration has consistently set the gold standard for District-level events, creating platforms where leadership, sportsmanship, and unity converge.</p>
            
            <h3 className="about-subtitle">Our Journey: Forging the Path</h3>
            <p>History is not just remembered; it is forged through the fire of our past successes. Our journey is marked by milestones that have defined the spirit of our District.</p>
            
            <div className="milestone">
              <h4>BLAZE (2017)</h4>
              <p>We brought the fire, igniting a movement in sports that still burns in the hearts of Rotaractors today. The First Rotaract District Sportsmeet of unified RI District 3201.</p>
            </div>
            
            <div className="milestone">
              <h4>NH 47 (2018)</h4>
              <p>We hosted the prestigious Rotaract District Assembly, proving our mettle in organizing high-level leadership summits and uniting the lands under one vision.</p>
            </div>
            
            <div className="milestone">
              <h4>GANDIVA (2024)</h4>
              <p>We introduced the precision and power of the legendary Arjuna's bow, elevating the sports meet to a realm of strategic brilliance and unmatched energy.</p>
            </div>
            
            <h3 className="about-subtitle">The New Era: ASTRA</h3>
            <p>The stage has shifted, and a new battleground emerges. As Rotaract District 3206 calls for its first champions, we are moving beyond the mortal limits.</p>
            <p>This year, we summon the divine. <strong>ASTRA</strong> is not just a sports meet; it is an ascension.</p>
            <p>Under the theme of "<em>Gods and Weapons,</em>" we invite you to step into an arena where the physical meets the mythical.</p>
            <p>Where mortals rise, and legends become immortal.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
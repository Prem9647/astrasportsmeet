import React from 'react';

const Home = () => {
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

      {/* District Leaders */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>PRESENTING TO YOU</h2>
          </div>
          
          <div className="team-grid">
            {/* District Member 1 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/anusha1.JPG')" }}></div>
              <div className="member-info">
                <h3>Rtr. Anusha S</h3>
                <p>Event Chairperson</p>
                <span>Rotaract Club of GCT Coimbatore</span>
              </div>
            </div>
            
            {/* District Member 2 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/lingesh.jpg')" }}></div>
              <div className="member-info">
                <h3>Rtr. Lingesh B S</h3>
                <p>Event Secretary</p>
                <span>Rotaract Club of Coimbatore Ignite </span>
              </div>
            </div>
            
            {/* District Member 4 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/kanika.jpeg')" }}></div>
              <div className="member-info">
                <h3>Rtr. Kanika P</h3>
                <p> Event Treasurer</p>
                <span>Rotaract Club of GCT Coimbatore</span>
              </div>
            </div>

            {/* District Member 3 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/vijay.jpeg')" }}></div>
              <div className="member-info">
                <h3>Rtr. Vijayaragavan E</h3>
                <p> Event Convenor</p>
                <span>Rotaract Club of Coimbatore Ignite</span>
              </div>
            </div>

            
      
            {/* Container for Two-Member Boxes */}
            <div className="two-members-container">
              {/* First Two-Member Box */}
              <div className="two-members">
                <div className="member-pair">
                  <div className="member-image" style={{ backgroundImage: "url('images/abiram.jpeg')" }}></div>
                  <div className="member-info">
                    <h3>Rtr. Abiram N</h3>
                    <p>Host President</p>
                    <span>Rotaract Club of GCT Coimbatore</span>
                  </div>
                </div>
                <div className="member-pair">
                  <div className="member-image" style={{ backgroundImage: "url('images/barath.jpg')" }}></div>
                  <div className="member-info">
                    <h3>Rtr. Barath S</h3>
                    <p>Host President</p>
                    <span>Rotaract Club of Coimbatore Ignite</span>
                  </div>
                </div>
              </div>

              {/* Second Two-Member Box */}
              <div className="two-members">
                <div className="member-pair">
                  <div className="member-image" style={{ backgroundImage: "url('images/gowsika.JPG')" }}></div>
                  <div className="member-info">
                    <h3>Rtr. Gowsika M</h3>
                    <p>Host Secretary</p>
                    <span>Rotaract Club of GCT Coimbatore</span>
                  </div>
                </div>
                <div className="member-pair">
                  <div className="member-image" style={{ backgroundImage: "url('images/harish.jpg')" }}></div>
                  <div className="member-info">
                    <h3> Rtr. Harish L</h3>
                    <p>Host Secretary</p>
                    <span>Rotaract Club of Coimbatore Ignite</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="team-grid">
            
            {/* District Member 2 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/Rtr.fahran.jpeg')" }}></div>
              <div className="member-info">
                <h3>Rtr. PP. Farhan</h3>
                <p>District Chair - Events</p>
                <span>RI District 3206 </span>
              </div>
            </div>
            
            {/* District Member 2 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/Drrgokul.jpeg')" }} ></div>
              <div className="member-info">
                <h3>Rtr. MPHF. Gogul</h3>
                <p>District Rotaract Representative</p>
                <span>RI District 3206  </span>
              </div>
            </div>

            {/* District Member 2 */}
            <div className="team-member">
              <div className="member-image" style={{ backgroundImage: "url('images/kamlesh.jpeg')" }}></div>
              <div className="member-info">
                <h3>Rtr. PP. Kamalesh</h3>
                <p>District Director - Events</p>
                <span>RI District 3206  </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
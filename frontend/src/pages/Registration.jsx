import React from 'react';

const Registration = () => {
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


      {/* Registration Section */}
      <section style={{ backgroundColor: '#590000' }}className="registration-hero">
        <div className="container">
          <div className="registration-content">
            <h2>Ready to Join the Battle?</h2>
            <p>Step into the arena where legends are born. Register now for ASTRA and become part of history.</p>
            <a href="https://forms.gle/JrHuebS6Hg2CqdXV6" className="register-btn" target="_blank" rel="noopener noreferrer">Register Now</a>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section style={{ backgroundColor: '#590000' }}>
        <div className="container">
          <div className="section-title">
            <h2>Registration Guidelines</h2>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h3 style={{ color: '#ffb342', marginBottom: '10px' }}>1. Registration Period</h3>
              <p>Registration for ASTRA Sports Meet 2026 begins on 1st January 2026.</p>
            </div>
            
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h3 style={{ color: '#ffb342', marginBottom: '10px' }}>2. Registration Form</h3>
              <p>All participants must register through the official online registration form.</p>
              <p style={{ fontWeight: 'bold', marginTop: '10px' }}><em>To Register:</em></p>
              <p>Click the "Register Now" button above 👆</p>
              <p>Ensure that all details entered in the form are accurate and complete.</p>
            </div>
            
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h3 style={{ color: '#ffb342', marginBottom: '10px' }}>3. Payment Instructions</h3>
              <p>Payment must be made only via UPI or direct bank transfer.</p>
              <p>After successful payment, upload the payment screenshot in the registration form.</p>
              <p>The screenshot must clearly display:</p>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li style={{ marginBottom: '5px' }}>Transaction ID</li>
                <li style={{ marginBottom: '5px' }}>Date and time of payment</li>
                <li style={{ marginBottom: '5px' }}>Amount paid</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h3 style={{ color: '#ffb342', marginBottom: '10px' }}>4. Offer: 5 + 1 Scheme</h3>
              <p>The 5 + 1 offer is valid for registrations made until 5th January 2026, 11:59 PM.</p>
              <p>Teams availing this offer must:</p>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li style={{ marginBottom: '5px' }}>Enter the names of all 6 participants correctly in the registration form.</li>
                <li style={{ marginBottom: '5px' }}>Ensure that details are complete and accurate.</li>
              </ul>
              <p style={{ color: '#ffb342', marginTop: '10px' }}>⚠️ Incorrect or incomplete team details may lead to disqualification of the registration.</p>
            </div>
            
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h3 style={{ color: '#ffb342', marginBottom: '10px' }}>5. Registration for 12 Members</h3>
              <p>Teams registering for 12 members must pay ₹4052.</p>
              <p>Participants are requested to pay the exact amount.</p>
              <p>Payments with incorrect amounts will not be accepted.</p>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#ffb342', marginBottom: '10px' }}>6. General Guidelines</h3>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li style={{ marginBottom: '5px' }}>Details submitted in the form cannot be modified after submission.</li>
                <li style={{ marginBottom: '5px' }}>Registration will be considered valid only after successful payment verification.</li>
                <li style={{ marginBottom: '5px' }}>Incomplete forms or missing payment proof will result in disqualification.</li>
                <li style={{ marginBottom: '5px' }}>Participants are advised to retain a copy of the payment screenshot for future reference.</li>
                <li style={{ marginBottom: '5px' }}>Any misuse of offers or submission of false information will lead to immediate disqualification.</li>
                <li style={{ marginBottom: '5px' }}>The decision of the Host Clubs, District Events Team, and DRR shall be final and binding.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
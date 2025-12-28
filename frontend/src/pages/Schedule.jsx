import React from 'react';

const Schedule = () => {
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

      
      {/* Schedule Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Tournament Schedule</h2>
            <p>Plan your participation according to the event timings</p>
          </div>

          <div className="schedule-table">
            <table>
              <thead>
                <tr>
                  <th data-label="Date">Date</th>
                  <th data-label="Time">Time</th>
                  <th data-label="Event">Event</th>
                  <th data-label="Venue">Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Date">Feb 21, 2026</td>
                  <td data-label="Time">7:30 AM</td>
                  <td data-label="Event">Reporting</td>
                  <td data-label="Venue">Main Audi</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 21, 2026</td>
                  <td data-label="Time">9:00 AM</td>
                  <td data-label="Event">Inauguration</td>
                  <td data-label="Venue">Main Audi</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 21, 2026</td>
                  <td data-label="Time">9:30 AM</td>
                  <td data-label="Event">Outdoor Events: Throwball, Volleyball, Basketball, Kho-Kho, Badminton, Box Cricket, Triathlon (Round 1)</td>
                  <td data-label="Venue">Gct Ground</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 21, 2026</td>
                  <td data-label="Time">1:00 PM</td>
                  <td data-label="Event">Lunch</td>
                  <td data-label="Venue">Open Audi</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 21, 2026</td>
                  <td data-label="Time">2:00 PM</td>
                  <td data-label="Event">Outdoor Events: Cricket, Kabaddi, Carnival Games, Tug of War, Target Practicing, Sack Race, Pole and Ring; Indoor Games: Chess, Table Tennis, Triathlon (Round 2)</td>
                  <td data-label="Venue">Gct Ground</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 21, 2026</td>
                  <td data-label="Time">6:00 PM</td>
                  <td data-label="Event">Wind up</td>
                  <td data-label="Venue">Main Audi</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 22, 2026</td>
                  <td data-label="Time">7:30 AM</td>
                  <td data-label="Event">Reporting</td>
                  <td data-label="Venue">Main Audi</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 22, 2026</td>
                  <td data-label="Time">9:00 AM</td>
                  <td data-label="Event">Zumba</td>
                  <td data-label="Venue">To be announced</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 22, 2026</td>
                  <td data-label="Time">9:30 AM</td>
                  <td data-label="Event">Outdoor Events: Athletics (100M, 200M, 800M, 4x100M Relay), Long Jump, Shot Put, Discuss Throw, Triathlon (Final Round)</td>
                  <td data-label="Venue">Gct Ground, Indoor Stadium</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 22, 2026</td>
                  <td data-label="Time">1:00 PM</td>
                  <td data-label="Event">Lunch</td>
                  <td data-label="Venue">Open Audi</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 22, 2026</td>
                  <td data-label="Time">2:00 PM</td>
                  <td data-label="Event">Outdoor Events: Finals, Carnival Games (Gilli, Pallanguzhi, Hop Scotch, Snake and Ladder); Indoor Games: Chess, Table Tennis</td>
                  <td data-label="Venue">Carnival Street</td>
                </tr>
                <tr>
                  <td data-label="Date">Feb 22, 2026</td>
                  <td data-label="Time">5:00 PM</td>
                  <td data-label="Event">Valediction</td>
                  <td data-label="Venue">Main Audi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ backgroundColor: '#590000' }}>
        <div className="container">
          <div className="section-title">
            <h2>Important Notes</h2>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Participants are expected to report at the venue by 07:30 AM. Teams with the maximum number of participants' attendance within the stipulated reporting time will get bonus points in the overall score.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Teams failing to report for a particular game, after a maximum of two calls, will lose points.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Late participation on the day of the event and during the matches is not recommended.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Participants must always wear the T-shirts provided by the Host Team on both days and should collect their wrist tags each day.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Shoes are mandatory for athletics. Athletes will not be permitted to enter the track without shoes under any circumstances.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Participants are requested to bring their own sporting accessories such as towels, personal water bottles, etc., if needed. Sports equipment will be available at the venue except for Badminton.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Decisions made by the referee/umpire/judges will be final and binding.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Participants' first point of contact will be their respective team captains and coordinators.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Any participant indulging in a quarrel or fight with other participants, referee, umpire, judges, or host team will be suspended immediately.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ Possession or consumption of liquor, alcohol, or narcotics in any form is strictly prohibited and, if found, the participant will be detained. Smoking anywhere inside the venue is strictly prohibited.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ The Host Team, with the consent of the DRR, can suspend any participant at any point during the event if the participant is found violating the guidelines.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ A First Aid Kit and ambulance will be available at the venue in case of emergency. Participants are requested to bring their own medications if they are under any treatment.</p>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <p>➤ The Rotaract District Sports Meet is meant for fun and fellowship among Rotaractors. Sportsmanship is highly encouraged.</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p>➤ Participants may contact the Event Chairperson, Host Team, District Events Team, or DRR for any queries or assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
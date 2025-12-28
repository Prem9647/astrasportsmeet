import React, { useState, useEffect } from 'react';
import EventModal from '../components/EventModal';
import { api } from '../utils/api';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventsData, setEventsData] = useState({});

  useEffect(() => {
    // Fetch events data from the backend
    api.get("/api/events")
      .then(res => res.json())
      .then(data => {
        // Transform the data to match the expected format
        const transformedData = {};
        data.forEach(event => {
          transformedData[event.eventId] = {
            name: event.title,
            description: event.description,
            timing: event.timing,
            venue: event.venue,
            players: event.players || []
          };
        });
        setEventsData(transformedData);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // Event details data
  const handleEventClick = (eventId) => {
    // Use the dynamic events data instead of static eventDetails
    setSelectedEvent(eventsData[eventId]);
    setIsModalOpen(true);
  };



  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const eventCards = [
    // Outdoor Events
    { id: 'throwball', title: 'Throwball', type: 'outdoor', category: 'team', image: 'images/throwball.jpeg' },
    { id: 'volleyball', title: 'Volleyball', type: 'outdoor', category: 'team', image: 'images/volley3.jpeg' },
    { id: 'football', title: 'Football', type: 'outdoor', category: 'team', image: 'images/football.jpeg' },
    { id: 'basketball', title: 'Basketball', type: 'outdoor', category: 'team', image: 'images/basketball-img.jpeg' },
    { id: 'kho-kho', title: 'Kho-Kho', type: 'outdoor', category: 'team', image: 'images/kho-kho.jpeg' },
    { id: 'box-cricket', title: 'Box Cricket', type: 'outdoor', category: 'team', image: 'images/boxcricket.jpeg' },
    { id: 'triathlon', title: 'Triathlon', type: 'outdoor', category: 'individual', image: 'images/triathlon.jpeg' },
    { id: 'cricket', title: 'Cricket', type: 'outdoor', category: 'team', image: 'images/cricket.jpeg' },
    { id: 'kabaddi', title: 'Kabaddi', type: 'outdoor', category: 'team', image: 'images/kabadi.jpeg' },
    { id: 'long-jump', title: 'Long Jump', type: 'outdoor', category: 'individual', image: 'images/long jump.jpeg' },
    { id: 'shot-put', title: 'Shot Put', type: 'outdoor', category: 'individual', image: 'images/shotput.jpeg' },
    { id: 'discus-throw', title: 'Discus Throw', type: 'outdoor', category: 'individual', image: 'images/disk throw.jpeg' },

    
    // Indoor Events
    { id: 'chess', title: 'Chess', type: 'indoor', category: 'individual', image: 'images/chess.jpeg' },
    { id: 'badminton', title: 'Badminton', type: 'indoor', category: 'individual', image: 'images/badminton.jpeg' },
    { id: 'table-tennis', title: 'Table Tennis', type: 'indoor', category: 'individual', image: 'images/tabletennis.jpeg' },

    // Athletics Events
    { id: '100m-sprint', title: '100M Sprint', type: 'athletics', category: 'individual', image: 'images/sprint.jpeg' },
    { id: '200m-sprint', title: '200M Sprint', type: 'athletics', category: 'individual', image: 'images/sprint.jpeg' },
    { id: '800m-run', title: '800M Run', type: 'athletics', category: 'individual', image: 'images/sprint.jpeg' },
    { id: '4x100m-relay', title: '4x100M Relay', type: 'athletics', category: 'team', image: 'images/relay.jpeg' },
    
    // Carnival Games
    { id: 'target-practicing', title: 'Target Practicing', type: 'carnival', category: 'individual', image: 'images/target-practice-img.jpg' },
    { id: 'sack-race', title: 'Sack Race', type: 'carnival', category: 'individual', image: 'images/sack-img.jpg' },
    { id: 'tug-of-war', title: 'Tug of War', type: 'carnival', category: 'team', image: 'images/Tug-of-war-img.jpg' },
    { id: 'pole-and-ring', title: 'Pole and Ring', type: 'carnival', category: 'team', image: 'images/polering-img.webp' },
    { id: 'gilli', title: 'Gilli', type: 'carnival', category: 'team', image: 'images/gilli.jpg' },
    { id: 'pallanguzhi', title: 'Pallanguzhi', type: 'carnival', category: 'team', image: 'images/pallanguli.jpg' },
    { id: 'hop-scotch', title: 'Hop Scotch', type: 'carnival', category: 'individual', image: 'images/hopscotch.jpg' },
    { id: 'snake-and-ladder', title: 'Snake and Ladder', type: 'carnival', category: 'team', image: 'images/snake.jpg' }
  ];

  const filteredEvents = filter === 'all' ? eventCards : eventCards.filter(event => event.type === filter);

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


      {/* Events Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Sports Events</h2>
            <p>Participate in a variety of exciting sports competitions</p>
          </div>

          <div className="filter-buttons">
            <button 
              className={`btn filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            <button 
              className={`btn filter-btn ${filter === 'outdoor' ? 'active' : ''}`} 
              onClick={() => setFilter('outdoor')}
            >
              Outdoor Events
            </button>
            <button 
              className={`btn filter-btn ${filter === 'indoor' ? 'active' : ''}`} 
              onClick={() => setFilter('indoor')}
            >
              Indoor Events
            </button>
            <button 
              className={`btn filter-btn ${filter === 'athletics' ? 'active' : ''}`} 
              onClick={() => setFilter('athletics')}
            >
              Athletics
            </button>
            <button 
              className={`btn filter-btn ${filter === 'carnival' ? 'active' : ''}`} 
              onClick={() => setFilter('carnival')}
            >
              Carnival Games
            </button>
          </div>

          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className={`event-card ${event.type} ${event.category} animate-on-scroll`} 
                onClick={() => handleEventClick(event.id)}
              >
                <div className="event-image" style={{ backgroundImage: `url('${event.image}')` }}></div>
                <div className="event-content">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>{event.title}</h3>
                    <button className="btn-event" onClick={(e) => {e.stopPropagation(); handleEventClick(event.id);}}>Click for Details</button>
                  </div>
                  <div className="event-meta">
                    <span>{event.type === 'outdoor' ? 'Outdoor Event' : 
                          event.type === 'indoor' ? 'Indoor Event' : 
                          event.type === 'athletics' ? 'Athletics' : 
                          'Carnival Game'}</span>
                    <span>{event.category === 'team' ? 'Team Sport' : 'Individual Sport'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </>
  );
};

export default Events;
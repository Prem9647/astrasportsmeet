import React from 'react';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div id="eventDetailsContent">
          <div className="event-details-header">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
          
          <div className="event-details-grid">
            <div className="event-detail-card">
              <h3>Timing</h3>
              <p>{event.timing}</p>
            </div>
            <div className="event-detail-card">
              <h3>Venue</h3>
              <p>{event.venue}</p>
            </div>
          </div>
          
          <div className="matchups">
            <h3>Matchups</h3>
            {event.players.map((match, index) => (
              <div key={index} className="matchup-item">
                <span className="player">{match.player1}</span>
                <span className="vs">VS</span>
                <span className="player">{match.player2}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
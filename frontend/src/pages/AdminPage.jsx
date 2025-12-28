import { useEffect, useState } from "react";
import { api } from '../utils/api';

export default function AdminPage() {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [photoFile, setPhotoFile] = useState(null);


  const loadTeams = () => {
    api.get("/api/teams")
      .then(res => res.json())
      .then(setTeams);
  };

  useEffect(loadTeams, []);

  const loadEvents = () => {
    api.get("/api/events")
      .then(res => res.json())
      .then(setEvents);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const addPoint = (teamId, type) => {
    api.adminPost("/api/admin/add-point", { teamId, type })
      .then(loadTeams);
  };

  const removePoint = (teamId, type) => {
    api.adminPost("/api/admin/remove-point", { teamId, type })
      .then(loadTeams);
  };

  const resetPoints = (teamId) => {
    if (window.confirm("Are you sure you want to reset all points for this team?")) {
      api.adminPost("/api/admin/reset-points", { teamId })
        .then(loadTeams);
    }
  };

  const addTeam = () => {
    api.adminPost("/api/admin/add-team", { name: teamName })
      .then(() => {
        setTeamName("");
        loadTeams();
      });
  };

  const addPlayerPair = () => {
    if (!selectedEvent) {
      alert("Please select an event");
      return;
    }
    if (!player1.trim()) {
      alert("Player 1 name is required");
      return;
    }

    const event = events.find(e => e._id === selectedEvent);
    if (!event) return;

    const updatedPlayers = [...event.players, { player1, player2: player2 || "-" }];
    
    api.adminPut(`/api/admin/events/${selectedEvent}/players`, { players: updatedPlayers })
    .then(res => res.json())
    .then(data => {
      if (data.success !== false) {
        setPlayer1("");
        setPlayer2("");
        loadEvents();
        alert("Player pair added successfully");
      } else {
        alert(data.message || "Error adding player pair");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error adding player pair");
    });
  };

  const startEditingPlayer = (player, index) => {
    setPlayer1(player.player1);
    setPlayer2(player.player2);
    setEditingPlayer(player);
    setEditingIndex(index);
  };

  const updatePlayerPair = () => {
    if (!selectedEvent) {
      alert("Please select an event");
      return;
    }
    if (!player1.trim()) {
      alert("Player 1 name is required");
      return;
    }

    const event = events.find(e => e._id === selectedEvent);
    if (!event) return;

    const updatedPlayers = [...event.players];
    updatedPlayers[editingIndex] = { player1, player2: player2 || "-" };
    
    api.adminPut(`/api/admin/events/${selectedEvent}/players`, { players: updatedPlayers })
    .then(res => res.json())
    .then(data => {
      if (data.success !== false) {
        setPlayer1("");
        setPlayer2("");
        setEditingPlayer(null);
        setEditingIndex(-1);
        loadEvents();
        alert("Player pair updated successfully");
      } else {
        alert(data.message || "Error updating player pair");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error updating player pair");
    });
  };

  const deletePlayerPair = (index) => {
    if (!selectedEvent) {
      alert("Please select an event");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this player pair?")) {
      return;
    }

    const event = events.find(e => e._id === selectedEvent);
    if (!event) return;

    const updatedPlayers = event.players.filter((_, i) => i !== index);
    
    api.adminPut(`/api/admin/events/${selectedEvent}/players`, { players: updatedPlayers })
    .then(res => res.json())
    .then(data => {
      if (data.success !== false) {
        loadEvents();
        alert("Player pair deleted successfully");
      } else {
        alert(data.message || "Error deleting player pair");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error deleting player pair");
    });
  };

  const uploadLivePhoto = () => {
    if (!photoFile) {
      alert("Please select a photo to upload");
      return;
    }

    const formData = new FormData();
    formData.append("photo", photoFile);

    api.upload("/api/admin/upload-photo", formData)
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setPhotoFile(null);
        alert("Photo uploaded successfully");
      } else {
        alert(data.message || "Error uploading photo");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error uploading photo");
    });
  };

  return (
    <div className="container admin-container">
      <div className="admin-header">
        <h2>⚙️ Admin Panel</h2>
        <button 
          className="admin-logout-btn"
          onClick={() => {
            // Remove auth token and trigger a window reload to update all components
            localStorage.removeItem('isAdminAuthenticated');
            window.location.href = '/login';
          }}
        >
          Logout
        </button>
      </div>

      <div className="team-management">
        <div className="admin-input-group">
          <input
            className="admin-input"
            placeholder="New Team Name"
            value={teamName}
            onChange={e => setTeamName(e.target.value)}
          />
          <button className="admin-btn admin-btn-primary" onClick={addTeam}>Add Team</button>
        </div>

      {teams.map(team => (
        <div key={team._id} className="team-item">
          <div className="team-name">{team.name}</div>
          <div className="team-points">
            <button className="point-btn point-btn-gold" onClick={() => addPoint(team._id, "gold")}>+ Gold</button>
            <button className="point-btn point-btn-gold" onClick={() => removePoint(team._id, "gold")}>- Gold</button>
            <button className="point-btn point-btn-silver" onClick={() => addPoint(team._id, "silver")}>+ Silver</button>
            <button className="point-btn point-btn-silver" onClick={() => removePoint(team._id, "silver")}>- Silver</button>
            <button className="point-btn point-btn-bronze" onClick={() => addPoint(team._id, "bronze")}>+ Bronze</button>
            <button className="point-btn point-btn-bronze" onClick={() => removePoint(team._id, "bronze")}>- Bronze</button>
            <button className="point-btn point-btn-bonus" onClick={() => addPoint(team._id, "bonus")}>+ Bonus</button>
            <button className="point-btn point-btn-bonus" onClick={() => removePoint(team._id, "bonus")}>- Bonus</button>
            <button className="point-btn" onClick={() => resetPoints(team._id)}>Reset All</button>
          </div>
        </div>
      ))}
      </div>

      {/* Player Management Section */}
      <div className="admin-section">
        <h3>👥 Player Management</h3>
        <div className="admin-input-group">
          <label>Select Event: </label>
          <select 
            className="admin-select"
            value={selectedEvent} 
            onChange={e => {
              setSelectedEvent(e.target.value);
              setEditingPlayer(null);
              setEditingIndex(-1);
              setPlayer1("");
              setPlayer2("");
            }}
          >
            <option value="">-- Select Event --</option>
            {events.map(event => (
              <option key={event._id} value={event._id}>{event.title}</option>
            ))}
          </select>
        </div>

        {selectedEvent && (
          <>
            <div className="admin-input-group">
              <input
                className="admin-input"
                placeholder="Player 1 Name"
                value={player1}
                onChange={e => setPlayer1(e.target.value)}
                style={{ width: '45%', marginRight: '2%' }}
              />
              <input
                className="admin-input"
                placeholder="Player 2 Name (optional)"
                value={player2}
                onChange={e => setPlayer2(e.target.value)}
                style={{ width: '45%' }}
              />
              <div style={{ marginTop: '10px' }}>
              {editingPlayer ? (
                <>
                  <button 
                    className="admin-btn admin-btn-success"
                    onClick={updatePlayerPair}
                  >
                    Update Player
                  </button>
                  <button 
                    className="admin-btn admin-btn-cancel"
                    onClick={() => {
                      setPlayer1("");
                      setPlayer2("");
                      setEditingPlayer(null);
                      setEditingIndex(-1);
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button 
                  className="admin-btn admin-btn-primary"
                  onClick={addPlayerPair}
                >
                  Add Player Pair
                </button>
              )}
              </div>
            </div>

            <div className="player-list">
              <h4>Current Players:</h4>
              {events.find(e => e._id === selectedEvent)?.players.map((player, index) => (
                <div key={index} className="player-item">
                  <div className="player-info">
                    <strong>Player 1:</strong> {player.player1} | <strong>Player 2:</strong> {player.player2}
                  </div>
                  <div className="player-actions">
                    <button 
                      className="admin-btn admin-btn-warning"
                      onClick={() => startEditingPlayer(player, index)}
                    >
                      Edit
                    </button>
                    <button 
                      className="admin-btn admin-btn-danger"
                      onClick={() => deletePlayerPair(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {(!events.find(e => e._id === selectedEvent)?.players.length || events.find(e => e._id === selectedEvent)?.players.length === 0) && (
                <p>No players added yet.</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Live Photo Upload Section */}
      <div className="admin-section">
        <h3>📸 Upload Live Photos</h3>
        <div className="photo-upload-area">
          <label className="photo-upload-label">Select an image to upload</label>
          <input
            className="photo-upload-input admin-input"
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />
          <button 
            className="admin-btn admin-btn-success"
            onClick={uploadLivePhoto}
          >
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function PublicView() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/teams")
      .then(res => res.json())
      .then(data =>
        setTeams(data.sort((a, b) => b.points - a.points))
      );
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

    {/* Points Table */}
    <section>
      <div className="points-table-container">
        <h2>🏆 Leaderboard</h2>

        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Bronze</th>
              <th>Bonus</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.gold}</td>
                <td>{team.silver}</td>
                <td>{team.bronze}</td>
                <td>+{team.bonus}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <div className="detail">
        <h5>GOLD: 3 Points</h5>
        <h5>SILVER: 2 Points</h5>
        <h5>BRONZE: 1 Point</h5>
    </div>
  </>
  );
}

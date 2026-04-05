import { useEffect, useState } from "react";
import "./PlayersCards.css";

export default function PlayersCards() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    fetch("https://rma-server.onrender.com/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Error fetching players:", err));
  }, []);

  const openPlayer = (number) => {
    const player = players.find((p) => p.number === number);

    if (player) {
      setSelectedPlayer(player);
    } else {
      setSelectedPlayer({
        name: "Player Info Coming Soon",
        number,
        position: "Real Madrid Player",
        nationality: "Unavailable",
        age: "--",
        appearances: "--",
        goals: "--",
        assists: "--",
        description: "This player is on the page, but the server data for this card has not been added yet."
      });
    }
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <>
      {/* GOALKEEPERS */}
      <section className="players-section">
        <h2 className="players-title">Goalkeeper</h2>

        <div className="players-grid two-col">
          <div className="player-card" onClick={() => openPlayer(1)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/courtois.png`}
              alt="Courtois"
            />
            <div className="player-overlay">
              <div className="player-number">1</div>
              <div>
                <div className="player-name">Courtois</div>
                <div className="player-role">Goalkeeper</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(13)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/lunin.png`}
              alt="Lunin"
            />
            <div className="player-overlay">
              <div className="player-number">13</div>
              <div>
                <div className="player-name">Lunin</div>
                <div className="player-role">Goalkeeper</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFENDERS */}
      <section className="players-section">
        <h2 className="players-title">Defender</h2>

        <div className="players-grid three-col">
          <div className="player-card" onClick={() => openPlayer(2)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/carvajal.png`}
              alt="Carvajal"
            />
            <div className="player-overlay">
              <div className="player-number">2</div>
              <div>
                <div className="player-name">Carvajal</div>
                <div className="player-role">Defender</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(3)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/militao.png`}
              alt="Militao"
            />
            <div className="player-overlay">
              <div className="player-number">3</div>
              <div>
                <div className="player-name">Militao</div>
                <div className="player-role">Defender</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(4)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/alaba.png`}
              alt="Alaba"
            />
            <div className="player-overlay">
              <div className="player-number">4</div>
              <div>
                <div className="player-name">Alaba</div>
                <div className="player-role">Defender</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIDFIELDERS */}
      <section className="players-section">
        <h2 className="players-title">Midfielder</h2>

        <div className="players-grid four-col">
          <div className="player-card" onClick={() => openPlayer(5)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/bellingham.png`}
              alt="Bellingham"
            />
            <div className="player-overlay">
              <div className="player-number">5</div>
              <div>
                <div className="player-name">Bellingham</div>
                <div className="player-role">Midfielder</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(6)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/cama.png`}
              alt="Camavinga"
            />
            <div className="player-overlay">
              <div className="player-number">6</div>
              <div>
                <div className="player-name">Camavinga</div>
                <div className="player-role">Midfielder</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(8)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/valverde.png`}
              alt="Valverde"
            />
            <div className="player-overlay">
              <div className="player-number">8</div>
              <div>
                <div className="player-name">Valverde</div>
                <div className="player-role">Midfielder</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(14)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/tchouameni.png`}
              alt="Tchouameni"
            />
            <div className="player-overlay">
              <div className="player-number">14</div>
              <div>
                <div className="player-name">Tchouameni</div>
                <div className="player-role">Midfielder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORWARDS */}
      <section className="players-section">
        <h2 className="players-title">Forward</h2>

        <div className="players-grid four-col">
          <div className="player-card" onClick={() => openPlayer(7)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/vini.png`}
              alt="Vini Jr"
            />
            <div className="player-overlay">
              <div className="player-number">7</div>
              <div>
                <div className="player-name">Vini Jr</div>
                <div className="player-role">Forward</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(9)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/mbappe.png`}
              alt="Mbappe"
            />
            <div className="player-overlay">
              <div className="player-number">9</div>
              <div>
                <div className="player-name">Mbappe</div>
                <div className="player-role">Forward</div>
              </div>
            </div>
          </div>

          <div className="player-card" onClick={() => openPlayer(11)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/rodrygo.png`}
              alt="Rodrygo"
            />
            <div className="player-overlay">
              <div className="player-number">11</div>
              <div>
                <div className="player-name">Rodrygo</div>
                <div className="player-role">Forward</div>
              </div>
            </div>
          </div>

          <a
            className="player-card all-players-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="All Players"
          >
            <div className="all-players-inner">
              <div className="all-players-arrow">→</div>
              <div className="all-players-text">All Players</div>
            </div>
          </a>
        </div>
      </section>

      {selectedPlayer && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <h2 className="modal-title">{selectedPlayer.name}</h2>

            <div className="modal-info">
              <p><strong>Number:</strong> {selectedPlayer.number}</p>
              <p><strong>Position:</strong> {selectedPlayer.position}</p>
              <p><strong>Nationality:</strong> {selectedPlayer.nationality}</p>
              <p><strong>Age:</strong> {selectedPlayer.age}</p>
              <p><strong>Appearances:</strong> {selectedPlayer.appearances}</p>
              <p><strong>Goals:</strong> {selectedPlayer.goals}</p>
              <p><strong>Assists:</strong> {selectedPlayer.assists}</p>
            </div>

            <p className="modal-description">{selectedPlayer.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
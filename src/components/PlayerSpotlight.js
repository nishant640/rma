import "./PlayerSpotlight.css";

const players = [
  {
    id: 1,
    name: "Jude Bellingham",
    position: "Midfielder",
    number: "5",
    image: `${process.env.PUBLIC_URL}/images/bellingham.png`,
    alt: "Jude Bellingham",
    link: "https://www.realmadrid.com/en-US/football/first-team/players/jude-bellingham",
  },
  {
    id: 2,
    name: "Vinícius Jr.",
    position: "Forward",
    number: "7",
    image: `${process.env.PUBLIC_URL}/images/vini.png`,
    alt: "Vinícius Jr.",
    link: "https://www.realmadrid.com/en-US/football/first-team/players/vinicius-paixao-de-oliveira-junior",
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    position: "Forward",
    number: "10",
    image: `${process.env.PUBLIC_URL}/images/mbappe.png`,
    alt: "Kylian Mbappé",
    link: "https://www.realmadrid.com/en-US/football/first-team/players/kylian-mbappe",
    active: true,
  },
  {
    id: 4,
    name: "Antonio Rüdiger",
    position: "Defender",
    number: "22",
    image: `${process.env.PUBLIC_URL}/images/rudiger.png`,
    alt: "Antonio Rüdiger",
    link: "https://www.realmadrid.com/en-US/football/first-team/players/antonio-rudiger",
  },
  {
    id: 5,
    name: "Ferland Mendy",
    position: "Defender",
    number: "23",
    image: `${process.env.PUBLIC_URL}/images/mendy.png`,
    alt: "Ferland Mendy",
    link: "https://www.realmadrid.com/en-US/football/first-team/players/ferland-mendy",
  },
  {
    id: 6,
    name: "Dean Huijsen",
    position: "Defender",
    number: "24",
    image: `${process.env.PUBLIC_URL}/images/dean.png`,
    alt: "Dean Huijsen",
    link: "https://www.realmadrid.com/en-US/football/first-team/players/dean-huijsen",
  },
];

export default function PlayerSpotlight() {
  return (
    <section id="player-spotlight" className="player-spotlight">
      <div className="player-spotlight__container">
        <h2 className="player-spotlight__title">Players Spotlight</h2>
        <p className="player-spotlight__subtitle">Click a player to view more</p>

        <div className="spotlight-row" role="list">
          {players.map((player) => (
            <a
              key={player.id}
              className={`player-card ${player.active ? "player-card--active" : ""}`}
              role="listitem"
              href={player.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="player-card__media">
                <img
                  className="player-card__image"
                  src={player.image}
                  alt={player.alt}
                />
                <div className="player-card__gradient" />
                <div className="player-card__badge">
                  <span className="player-card__badge-num">{player.number}</span>
                </div>
              </div>

              <div className="player-card__caption">
                <div className="player-card__name">{player.name}</div>
                <div className="player-card__position">{player.position}</div>
              </div>
            </a>
          ))}

          <a
            className="player-card player-card--all"
            role="listitem"
            href="https://www.realmadrid.com/en-US/football/first-team/players"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="player-card__media player-card__media--all">
              <div className="all-players-inner">
                <div className="all-arrow">→</div>
                <div className="all-text">All Players</div>
              </div>
            </div>

            <div className="player-card__caption">
              <div className="player-card__name">View Squad</div>
              <div className="player-card__position">Official Website</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
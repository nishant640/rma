import "./PlayerSpotlight.css";

function PlayerSpotlight() {
  return (
    <section id="player-spotlight" className="player-spotlight">
      <div className="container">
        <h2 className="section-title">Players Spotlight</h2>
        <p className="section-sub">Click a player to view more</p>

        <div className="spotlight-row">

          <a
            className="player-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players/jude-bellingham"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <img className="player-photo" src="/images/bellingham.png" alt="Jude Bellingham" />
              <div className="card-gradient"></div>
              <div className="player-badge"><span className="badge-num">5</span></div>
            </div>
            <div className="player-caption">
              <div className="player-name">Jude Bellingham</div>
              <div className="player-pos">Midfielder</div>
            </div>
          </a>

          <a
            className="player-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players/vinicius-paixao-de-oliveira-junior"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <img className="player-photo" src="/images/vini.png" alt="Vinícius Jr." />
              <div className="card-gradient"></div>
              <div className="player-badge"><span className="badge-num">7</span></div>
            </div>
            <div className="player-caption">
              <div className="player-name">Vinícius Jr.</div>
              <div className="player-pos">Forward</div>
            </div>
          </a>

          <a
            className="player-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players/kylian-mbappe"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <img className="player-photo" src="/images/mbappe.png" alt="Kylian Mbappé" />
              <div className="card-gradient"></div>
              <div className="player-badge"><span className="badge-num">10</span></div>
            </div>
            <div className="player-caption">
              <div className="player-name">Kylian Mbappé</div>
              <div className="player-pos">Forward</div>
            </div>
          </a>

          <a
            className="player-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players/antonio-rudiger"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <img className="player-photo" src="/images/rudiger.png" alt="Antonio Rüdiger" />
              <div className="card-gradient"></div>
              <div className="player-badge"><span className="badge-num">22</span></div>
            </div>
            <div className="player-caption">
              <div className="player-name">Antonio Rüdiger</div>
              <div className="player-pos">Defender</div>
            </div>
          </a>

          <a
            className="player-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players/ferland-mendy"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <img className="player-photo" src="/images/mendy.png" alt="Ferland Mendy" />
              <div className="card-gradient"></div>
              <div className="player-badge"><span className="badge-num">23</span></div>
            </div>
            <div className="player-caption">
              <div className="player-name">Ferland Mendy</div>
              <div className="player-pos">Defender</div>
            </div>
          </a>

          <a
            className="player-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players/dean-huijsen"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <img className="player-photo" src="/images/dean.png" alt="Dean Huijsen" />
              <div className="card-gradient"></div>
              <div className="player-badge"><span className="badge-num">24</span></div>
            </div>
            <div className="player-caption">
              <div className="player-name">Dean Huijsen</div>
              <div className="player-pos">Defender</div>
            </div>
          </a>

          <a
            className="player-card all-players-card"
            href="https://www.realmadrid.com/en-US/football/first-team/players"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-media">
              <div className="all-players-inner">
                <div className="all-arrow">→</div>
                <div className="all-text">All Players</div>
              </div>
            </div>
            <div className="player-caption">
              <div className="player-name">View Squad</div>
              <div className="player-pos">Official Website</div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default PlayerSpotlight;
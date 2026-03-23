import "./NewsMain.css";

function NewsMain() {
  return (
    <main className="news-wrap">
      <div className="news-left">
        <section className="top-stories">
          <div className="big-story">
            <img
              className="big-img"
              src="/images/uclwin.png"
              alt="big story"
            />
            <div className="big-text">
              <span className="tag">MATCH REPORT</span>
              <h2>
                Real Madrid Secures Dominant Victory in Latest Champions League
                Match
              </h2>
              <p>
                Los Blancos deliver a commanding performance and take an
                important win.
              </p>
            </div>
          </div>

          <div className="small-story">
            <img
              className="small-img"
              src="/images/bernabeu.png"
              alt="small story"
            />
            <div className="small-text">
              <span className="tag">STADIUM NEWS</span>
              <h3>Santiago Bernabéu Stadium Renovation Reaches Final Phase</h3>
              <p>The iconic stadium’s transformation is nearing completion.</p>
            </div>
          </div>
        </section>

        <section className="bottom-news-grid">
          <div className="news-mini-card">
            <img
              className="mini-img"
              src="/images/youth.png"
              alt="Youth academy"
            />
            <div className="mini-text">
              <span className="tag">YOUTH TEAM</span>
              <h3>Youth Academy Stars Shine in Training Session</h3>
              <p>
                Young players continue to impress the coaching staff this week.
              </p>
            </div>
          </div>

          <div className="news-mini-card">
            <img
              className="mini-img"
              src="/images/uclwin.png"
              alt="History celebration"
            />
            <div className="mini-text">
              <span className="tag">HISTORY</span>
              <h3>Real Madrid’s Record-Breaking Champions League Legacy</h3>
              <p>
                A look back at the moments that built the club’s European
                dominance.
              </p>
            </div>
          </div>

          <div className="news-mini-card">
            <img
              className="mini-img"
              src="/images/tactics.png"
              alt="Tactical analysis"
            />
            <div className="mini-text">
              <span className="tag">ANALYSIS</span>
              <h3>Tactical Analysis: How Real Madrid Dominates Possession</h3>
              <p>
                Breaking down the strategy behind Madrid’s midfield control.
              </p>
            </div>
          </div>

          <div className="news-mini-card">
            <img
              className="mini-img"
              src="/images/madridistas.png"
              alt="Fans around the world"
            />
            <div className="mini-text">
              <span className="tag">FAN CULTURE</span>
              <h3>Madridistas Around the World Celebrate Latest Victory</h3>
              <p>
                Fans react as the team continues its winning momentum.
              </p>
            </div>
          </div>

          <div className="news-mini-card">
            <img
              className="mini-img"
              src="/images/upcoming.png"
              alt="Transfer rumours"
            />
            <div className="mini-text">
              <span className="tag">TRANSFERS</span>
              <h3>Transfer Rumors: Summer Window Preview</h3>
              <p>
                Exploring potential signings and what the squad needs next.
              </p>
            </div>
          </div>

          <div className="news-mini-card">
            <img
              className="mini-img"
              src="/images/train.png"
              alt="Inside training"
            />
            <div className="mini-text">
              <span className="tag">CLUB</span>
              <h3>Inside Training: Preparation for the Next Big Match</h3>
              <p>
                How the squad is getting ready for the upcoming fixture.
              </p>
            </div>
          </div>
        </section>
      </div>

      <aside className="news-right">
        <div className="side-card">
          <h3>LATEST NEWS</h3>

          <div className="side-item">
            <strong>Alvaro situation leaves latest injury update</strong>
            <p className="side-sub">Feb 22, 2026 • Real Madrid News</p>
          </div>

          <div className="side-item">
            <strong>Post-match interview: Coach reaction</strong>
            <p className="side-sub">Feb 21, 2026 • Matchday</p>
          </div>

          <a className="side-btn" href="/">VISIT INFO</a>
        </div>

        <div className="trophy-stats">
          <div className="stat">
            <div className="stat-num">36</div>
            <div className="stat-lab">National Leagues</div>
          </div>

          <div className="stat">
            <div className="stat-num">20</div>
            <div className="stat-lab">Spanish Cups</div>
          </div>

          <div className="stat">
            <div className="stat-num">15</div>
            <div className="stat-lab">European cups</div>
          </div>

          <div className="stat">
            <div className="stat-num">9</div>
            <div className="stat-lab">FIFA Club World Cups</div>
          </div>

          <div className="stat">
            <div className="stat-num">6</div>
            <div className="stat-lab">European Super cups</div>
          </div>

          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-lab">UEFA Cups</div>
          </div>

          <div className="stat">
            <div className="stat-num">13</div>
            <div className="stat-lab">Spanish Super Cups</div>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default NewsMain;
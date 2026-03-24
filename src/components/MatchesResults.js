import React from "react";
import "./MatchesResults.css";

export default function MatchesResults() {
  return (
    <main className="page">
      <section className="results-wrap">
        <div className="results-left">
          <h2>LATEST RESULTS</h2>

          <div className="result-row">
            <div className="team left">
              <img
                className="club"
                src={`${process.env.PUBLIC_URL}/images/rm.png`}
                alt="Real Madrid"
              />
              <span>Real Madrid</span>
            </div>

            <div className="score">2 - 0</div>

            <div className="team right">
              <span>Sevilla</span>
              <img
                className="club"
                src={`${process.env.PUBLIC_URL}/images/sevilla.png`}
                alt="Sevilla"
              />
            </div>
          </div>

          <a className="info-btn" href="#" target="_blank" rel="noopener noreferrer">
            CLICK HERE FOR MORE INFORMATION
          </a>

          <div className="result-row">
            <div className="team left">
              <img
                className="club"
                src={`${process.env.PUBLIC_URL}/images/rm.png`}
                alt="Real Madrid"
              />
              <span>Real Madrid</span>
            </div>

            <div className="score">3 - 1</div>

            <div className="team right">
              <span>FC Barcelona</span>
              <img
                className="club"
                src={`${process.env.PUBLIC_URL}/images/barca.png`}
                alt="FC Barcelona"
              />
            </div>
          </div>

          <a className="info-btn" href="#" target="_blank" rel="noopener noreferrer">
            CLICK HERE FOR MORE INFORMATION
          </a>

          <div className="result-row">
            <div className="team left">
              <img
                className="club"
                src={`${process.env.PUBLIC_URL}/images/rm.png`}
                alt="Real Madrid"
              />
              <span>Real Madrid</span>
            </div>

            <div className="score">3 - 2</div>

            <div className="team right">
              <span>Bayern Munich</span>
              <img
                className="club"
                src={`${process.env.PUBLIC_URL}/images/bayern.png`}
                alt="Bayern Munich"
              />
            </div>
          </div>

          <a className="info-btn" href="#" target="_blank" rel="noopener noreferrer">
            CLICK HERE FOR MORE INFORMATION
          </a>
        </div>

        <aside className="results-right">
          <div className="table-card">
            <h3>LA LIGA TABLE</h3>

            <div className="table-row head">
              <span>#</span>
              <span>Team</span>
              <span>Pts</span>
            </div>

            <div className="table-row">
              <span>1</span>
              <span>Real Madrid</span>
              <span>66</span>
            </div>
            <div className="table-row">
              <span>2</span>
              <span>Barcelona</span>
              <span>61</span>
            </div>
            <div className="table-row">
              <span>3</span>
              <span>Atlético</span>
              <span>56</span>
            </div>
            <div className="table-row">
              <span>4</span>
              <span>Girona</span>
              <span>52</span>
            </div>

            <p className="table-note">Example table</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
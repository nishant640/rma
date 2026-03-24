import React from "react";
import "./UpcomingMatches.css";

export default function UpcomingMatches() {
  return (
    <section className="upcoming">
      <h2>UPCOMING MATCHES</h2>

      <div className="upcoming-card">
        <img
          className="bigclub"
          src={`${process.env.PUBLIC_URL}/images/rm.png`}
          alt="Real Madrid"
        />
        <div className="up-text">
          <div className="up-title">
            Real Madrid <span>VS</span> Valencia
          </div>
          <div className="up-date">DATE TBD</div>
        </div>
        <img
          className="bigclub"
          src={`${process.env.PUBLIC_URL}/images/valencia.png`}
          alt="Valencia"
        />
      </div>

      <div className="upcoming-card">
        <img
          className="bigclub"
          src={`${process.env.PUBLIC_URL}/images/rm.png`}
          alt="Real Madrid"
        />
        <div className="up-text">
          <div className="up-title">
            Real Madrid <span>VS</span> Chelsea
          </div>
          <div className="up-date">DATE TBD</div>
        </div>
        <img
          className="bigclub"
          src={`${process.env.PUBLIC_URL}/images/chelsea.png`}
          alt="Chelsea"
        />
      </div>

      <div className="upcoming-card">
        <img
          className="bigclub"
          src={`${process.env.PUBLIC_URL}/images/rm.png`}
          alt="Real Madrid"
        />
        <div className="up-text">
          <div className="up-title">
            Real Madrid <span>VS</span> Real Betis
          </div>
          <div className="up-date">DATE TBD</div>
        </div>
        <img
          className="bigclub"
          src={`${process.env.PUBLIC_URL}/images/betis.png`}
          alt="Real Betis"
        />
      </div>
    </section>
  );
}
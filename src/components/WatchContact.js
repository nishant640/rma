import "./WatchContact.css";

function WatchContact() {
  return (
    <section className="watch-contact-section">
      <div className="watch-contact-container">
        <div className="watch-box">
          <h2 className="watch-title">WATCH REAL MADRID</h2>
          <p className="watch-subtext">
            Watch our current featured video for the month.
          </p>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/XUPgMNeMVRc"
              title="Real Madrid Best Goals 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="contact-box">
          <h2 className="contact-title">CONTACT</h2>
          <p className="contact-subtext">Send us a message!</p>

          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WatchContact;
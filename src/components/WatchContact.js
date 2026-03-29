import { useState } from "react";
import "./WatchContact.css";

function WatchContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //
    console.log(formData); // 

    setSubmitted(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="watch-contact-section">
      <div className="watch-contact-container">
        
        {/* VIDEO */}
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

        {/* CONTACT FORM */}
        <div className="contact-box">
          <h2 className="contact-title">CONTACT</h2>
          <p className="contact-subtext">Send us a message!</p>

          {submitted && <p className="success-msg">Message sent successfully!</p>}

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default WatchContact;
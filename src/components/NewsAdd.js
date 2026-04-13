import { useState } from "react";
import "./NewsAdd.css";

function NewsAdd({ onNewsPosted }) {
  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://rma-server.onrender.com";

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    description: ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (
      !formData.title.trim() ||
      !formData.category.trim() ||
      !formData.date.trim() ||
      !formData.description.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: formData.title.trim(),
          category: formData.category.trim(),
          date: formData.date.trim(),
          description: formData.description.trim()
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error posting update.");
        return;
      }

      setSuccess("Update posted successfully!");

      setFormData({
        title: "",
        category: "",
        date: "",
        description: ""
      });

      if (onNewsPosted) {
        onNewsPosted();
      }

      setTimeout(() => {
        setSuccess("");
      }, 2500);
    } catch (err) {
      setError("Server error. Could not post update.");
    }
  };

  return (
    <section className="add-update-section">
      <h2 className="add-update-title">Add a Club Update</h2>

      <form className="add-update-form" onSubmit={handleSubmit}>
        <div className="add-update-grid">
          <input
            className="add-update-input"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            className="add-update-input"
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            className="add-update-input"
            type="text"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <textarea
          className="add-update-textarea"
          name="description"
          placeholder="Short update description"
          value={formData.description}
          onChange={handleChange}
        />

        {(success || error) && (
          <div className="add-update-message-wrap">
            {success && <p className="form-success">{success}</p>}
            {error && <p className="form-error">{error}</p>}
          </div>
        )}

        <div className="add-update-actions">
          <button className="add-update-button" type="submit">
            Post Update
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewsAdd;
import { useEffect, useState } from "react";
import "./NewsMain.css";

function NewsMain({ refreshNews }) {
  const API_BASE =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://rma-server.onrender.com";

  const [newsUpdates, setNewsUpdates] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/news`)
      .then((res) => res.json())
      .then((data) => setNewsUpdates(data))
      .catch((err) => console.error("Error fetching news updates:", err));
  }, [refreshNews, API_BASE]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/news/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        setNewsUpdates((prev) => prev.filter((item) => item.id !== id));
        setSuccessMessage("News update deleted successfully.");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        alert(data.message || "Failed to delete news update.");
      }
    } catch (err) {
      console.error("Error deleting news update:", err);
      alert("Something went wrong while deleting.");
    }
  };

  const handleEdit = async (update) => {
    const newTitle = prompt("Enter new title:", update.title);
    if (newTitle === null) return;
    if (newTitle.trim().length < 3) {
      alert("Title must be at least 3 characters.");
      return;
    }

    const newCategory = prompt("Enter new category:", update.category);
    if (newCategory === null) return;
    if (newCategory.trim().length < 3) {
      alert("Category must be at least 3 characters.");
      return;
    }

    const newDate = prompt("Enter new date:", update.date);
    if (newDate === null) return;
    if (!newDate.trim()) {
      alert("Date is required.");
      return;
    }

    const newDescription = prompt("Enter new description:", update.description);
    if (newDescription === null) return;
    if (newDescription.trim().length < 10) {
      alert("Description must be at least 10 characters.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/news/${update.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle.trim(),
          category: newCategory.trim(),
          date: newDate.trim(),
          description: newDescription.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setNewsUpdates((prev) =>
          prev.map((item) => (item.id === update.id ? data.news : item))
        );
        setSuccessMessage("News update edited successfully.");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        alert(data.message || "Failed to edit news update.");
      }
    } catch (err) {
      console.error("Error editing news update:", err);
      alert("Something went wrong while editing.");
    }
  };

  return (
    <main className="news-wrap">
      <div className="news-left">
        <section className="top-stories">
          <div className="big-story">
            <img
              className="big-img"
              src={`${process.env.PUBLIC_URL}/images/uclwin.png`}
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
              src={`${process.env.PUBLIC_URL}/images/bernabeu.png`}
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
              src={`${process.env.PUBLIC_URL}/images/youth.png`}
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
              src={`${process.env.PUBLIC_URL}/images/uclwin.png`}
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
              src={`${process.env.PUBLIC_URL}/images/tactics.png`}
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
              src={`${process.env.PUBLIC_URL}/images/madridistas.png`}
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
              src={`${process.env.PUBLIC_URL}/images/upcoming.png`}
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
              src={`${process.env.PUBLIC_URL}/images/train.png`}
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

        {newsUpdates.length > 0 && (
          <section className="fan-updates-section">
            <div className="fan-updates-header">
              <h2 className="players-title">Latest Fan Updates</h2>
              {successMessage && (
                <p className="fan-update-success">{successMessage}</p>
              )}
            </div>

            <div className="fan-updates-list">
              {newsUpdates.map((update) => (
                <div key={update.id} className="fan-update-card">
                  <div className="fan-update-top">
                    <span className="fan-update-tag">{update.category}</span>
                    <span className="fan-update-date">{update.date}</span>
                  </div>

                  <h3 className="fan-update-title">{update.title}</h3>
                  <p className="fan-update-description">{update.description}</p>

                  <div className="fan-update-actions">
                    <button
                      className="fan-update-btn fan-update-btn-dark"
                      onClick={() => handleEdit(update)}
                    >
                      Edit
                    </button>

                    <button
                      className="fan-update-btn fan-update-btn-light"
                      onClick={() => handleDelete(update.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
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

          <a className="side-btn" href="/">
            VISIT INFO
          </a>
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
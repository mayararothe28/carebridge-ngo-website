import { useParams, Link } from "react-router-dom";
import { workData, getWorkById } from "../data/workData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./WorkDetails.css";

function WorkDetails() {
  const { id } = useParams();
  const sectionRef = useScrollAnimation();

  const currentWork = getWorkById(id);

  // Get 3 other initiatives as related
  const relatedWorks = workData
    .filter((item) => item.id !== currentWork.id)
    .slice(0, 3);

  return (
    <main className="work-details-page" ref={sectionRef}>
      {/* Header Section */}
      <section className="wd-header fade-in">
        <div className="container">
          <div className="wd-top-nav d-flex align-items-center gap-3 mb-3">
            <Link to="/" className="wd-back-link mb-0">
              <i className="bi bi-arrow-left"></i> Back to Home
            </Link>
            <span className="text-muted opacity-50">/</span>
            <Link to="/work" className="wd-back-link mb-0">
              Our Work
            </Link>
          </div>
          <div className="wd-header-content">
            <span className="wd-badge">{currentWork.tag}</span>
            <h1>{currentWork.title}</h1>
            <p className="wd-subtitle">{currentWork.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="wd-main">
        <div className="container">
          <div className="row">
            {/* Left Content Column */}
            <div className="col-lg-8 fade-in">
              <div className="wd-featured-img-wrapper">
                <img
                  src={currentWork.img}
                  alt={currentWork.title}
                  className="wd-featured-img"
                />
                <div className="wd-featured-icon">
                  <i className={`bi ${currentWork.icon}`}></i>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="wd-stats-grid">
                {currentWork.stats.map((stat, idx) => (
                  <div className="wd-stat-card" key={idx}>
                    <div className="wd-stat-val">{stat.value}</div>
                    <div className="wd-stat-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description Content Box */}
              <div className="wd-content-box">
                <h2>About This Initiative</h2>
                <div className="wd-lead">
                  <i className="bi bi-quote me-2 fs-5"></i>
                  {currentWork.desc}
                </div>

                {currentWork.fullDescription.map((paragraph, index) => (
                  <p key={index} className="wd-paragraph">
                    {paragraph}
                  </p>
                ))}

                {/* Highlights List */}
                <div className="wd-highlights-box">
                  <h3>Key Program Highlights</h3>
                  {currentWork.highlights.map((highlight, index) => (
                    <div className="wd-highlight-item" key={index}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="col-lg-4">
              <aside className="wd-sidebar fade-in stagger-2">
                {/* Take Action Card */}
                <div className="wd-action-card">
                  <h3>Make a Difference</h3>
                  <p>
                    Your generosity enables us to expand the{" "}
                    <strong>{currentWork.title}</strong> initiative to more
                    underprivileged communities.
                  </p>
                  <Link to="/donate" className="wd-btn-donate">
                    <i className="bi bi-heart-fill"></i> Donate to this Cause
                  </Link>
                  <Link to="/volunteer" className="wd-btn-volunteer">
                    <i className="bi bi-person-heart"></i> Join as Volunteer
                  </Link>
                </div>

                {/* All Initiatives List */}
                <div className="wd-nav-card">
                  <h4>All Initiatives</h4>
                  <ul className="wd-nav-list">
                    {workData.map((item) => (
                      <li key={item.id} className="wd-nav-item">
                        <Link
                          to={`/work/${item.id}`}
                          className={`wd-nav-link ${
                            item.id === currentWork.id ? "active" : ""
                          }`}
                        >
                          <span>
                            <i className={`bi ${item.icon} me-2`}></i>
                            {item.title}
                          </span>
                          <i className="bi bi-chevron-right"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>

          {/* Related Initiatives Section */}
          <div className="wd-related-section fade-in">
            <h2>Explore More Initiatives</h2>
            <div className="row g-4">
              {relatedWorks.map((item, i) => (
                <div className="col-md-4" key={item.id}>
                  <Link
                    to={`/work/${item.id}`}
                    className={`work-card fade-in stagger-${
                      i + 1
                    } text-decoration-none d-block`}
                  >
                    <div className="work-card-img">
                      <img src={item.img} alt={item.title} />
                      <span className="work-card-badge">{item.tag}</span>
                      <div className="work-card-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                    </div>
                    <div className="work-card-body text-dark">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <div className="work-card-footer">
                        <span className="work-card-link">
                          Learn More <i className="bi bi-arrow-right ms-1"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkDetails;

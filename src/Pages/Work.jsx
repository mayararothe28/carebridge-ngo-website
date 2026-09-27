import { useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { workData } from "../data/workData";

function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const sectionRefs = {
    hero: useScrollAnimation(),
    grid: useScrollAnimation(),
    cta: useScrollAnimation(),
  };

  const categories = ["All", ...new Set(workData.map((item) => item.tag))];

  const filteredData =
    activeCategory === "All"
      ? workData
      : workData.filter((item) => item.tag === activeCategory);

  return (
    <main className="work-page">
      {/* Hero Section */}
      <section className="work-hero page-hero" ref={sectionRefs.hero}>
        <div className="container">
          <div className="fade-in">
            <span className="section-label">Our Work & Initiatives</span>
            <h1>Where Your Support Goes</h1>
            <p>
              Discover how CareBridge transforms lives across communities through
              focused, high-impact programs in education, healthcare, nutrition,
              and sustainable community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of 12 Initiatives */}
      <section className="work-grid-section" ref={sectionRefs.grid}>
        <div className="container">
          {/* Category Filter Bar */}
          <div className="work-filter-bar fade-in">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`work-filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid: 4 cards per row (desktop), 2 (tablet), 1 (mobile) */}
          <div className="row g-4">
            {filteredData.map((item, i) => (
              <div className="col-md-6 col-lg-3 mb-4" key={item.id}>
                <Link
                  to={`/work/${item.id}`}
                  className={`work-card fade-in stagger-${
                    (i % 4) + 1
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
      </section>

      {/* Call to Action Section */}
      <section className="work-cta" ref={sectionRefs.cta}>
        <div className="container text-center fade-in">
          <h2>Ready to Create an Impact?</h2>
          <p>
            Join us in our mission to uplift communities and transform lives
            together.
          </p>
          <div className="work-cta-btns">
            <Link to="/donate" className="btn-cta-primary">
              <i className="bi bi-heart-fill"></i> Donate Now
            </Link>
            <Link to="/volunteer" className="btn-cta-outline">
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;

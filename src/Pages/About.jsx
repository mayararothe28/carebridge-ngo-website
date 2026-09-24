import "./About.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

function About() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    mission: useScrollAnimation(),
    values: useScrollAnimation(),
    team: useScrollAnimation(),
    cta: useScrollAnimation(),
  };

  return (
    <main className="about-page">
      
      <section className="about-hero" ref={sectionRefs.hero}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-left">
              <div className="about-hero-content">
                <span className="section-label">About CareBridge</span>
                <h1>
                  Building Hope.
                  <br />
                  Creating <span className="text-accent">Change.</span>
                </h1>
                <p className="about-hero-description">
                  CareBridge is a community-focused NGO working to support children,
                  families and communities through education, food support, healthcare,
                  and meaningful volunteer opportunities.
                </p>
                <div className="about-hero-buttons">
                  <a href="#mission" className="btn-cta-primary">
                    Our Mission
                  </a>
                  <a href="#team" className="btn-cta-outline">
                    Meet the Team
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 fade-in-right">
              <div className="about-hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1000&q=80"
                  alt="CareBridge volunteers supporting the community"
                  className="about-hero-image"
                />
                <div className="about-hero-badge">
                  <strong>Together</strong>
                  <span>We Make a Difference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission" id="mission" ref={sectionRefs.mission}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-left">
              <div className="about-image-collage">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
                  alt="Children learning"
                  className="collage-img-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=500&q=80"
                  alt="Volunteers helping"
                  className="collage-img-2"
                />
              </div>
            </div>

            <div className="col-lg-6 fade-in-right">
              <div className="about-mission-content">
                <span className="section-label">Our Story</span>
                <h2>Connecting People Who Care With Communities in Need</h2>
                <p>
                  We believe that meaningful change begins when people come
                  together with compassion and a willingness to help. CareBridge
                  started with a simple idea: practical support can improve everyday
                  lives and create opportunities for a better future.
                </p>
                <div className="mission-vision-boxes">
                  <div className="mv-box">
                    <div className="mv-icon">
                      <i className="bi bi-bullseye"></i>
                    </div>
                    <div>
                      <h4>Our Mission</h4>
                      <p>
                        To support vulnerable communities through education,
                        healthcare, and food security initiatives.
                      </p>
                    </div>
                  </div>
                  <div className="mv-box">
                    <div className="mv-icon">
                      <i className="bi bi-eye-fill"></i>
                    </div>
                    <div>
                      <h4>Our Vision</h4>
                      <p>
                        An inclusive society where everyone has the opportunity
                        to live with dignity and hope.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="about-values bg-light" ref={sectionRefs.values}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Core Values</span>
            <h2>What Guides Our Work</h2>
            <p className="section-subtitle">
              These principles shape how we interact with communities, volunteers,
              and supporters every single day.
            </p>
          </div>

          <div className="row">
            {[
              {
                icon: "bi-heart-fill",
                title: "Compassion",
                desc: "We approach every person and every community with care, respect, and deep understanding.",
              },
              {
                icon: "bi-shield-check",
                title: "Transparency",
                desc: "We believe responsible communication and accountability are essential to building trust.",
              },
              {
                icon: "bi-people-fill",
                title: "Equality",
                desc: "Everyone deserves dignity, opportunity, and access to support regardless of circumstances.",
              },
              {
                icon: "bi-diagram-3-fill",
                title: "Teamwork",
                desc: "Lasting change becomes possible only when people work together toward a common purpose.",
              },
            ].map((val, idx) => (
              <div className="col-md-6 col-lg-3 mb-4" key={idx}>
                <div className={`value-card fade-in stagger-${idx + 1}`}>
                  <div className="value-icon">
                    <i className={`bi ${val.icon}`}></i>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="about-team" id="team" ref={sectionRefs.team}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Our People</span>
            <h2>Meet the CareBridge Team</h2>
            <p className="section-subtitle">
              The dedicated individuals working tirelessly behind the scenes to make
              our mission a reality.
            </p>
          </div>

          <div className="row">
            {[
              {
                name: "Dr. Ananya Sharma",
                role: "Founder & Director",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Rohan Mehta",
                role: "Operations Head",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Priya Desai",
                role: "Volunteer Coordinator",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Vikram Singh",
                role: "Field Outreach Lead",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
              },
            ].map((member, idx) => (
              <div className="col-md-6 col-lg-3 mb-4" key={idx}>
                <div className={`team-card fade-in stagger-${idx + 1}`}>
                  <div className="team-img">
                    <img src={member.img} alt={member.name} />
                    <div className="team-socials">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta" ref={sectionRefs.cta}>
        <div className="container">
          <div className="about-cta-content fade-in">
            <span className="section-label light">Be Part of the Change</span>
            <h2>Together We Can Make a Difference</h2>
            <p>
              Donate your resources, volunteer your time, or help spread the word.
              Every contribution matters in building a better world.
            </p>
            <div className="about-cta-buttons">
              <Link to="/donate" className="btn-cta-white text-decoration-none">
                <i className="bi bi-heart-fill"></i> Donate Now
              </Link>
              <Link to="/volunteer" className="btn-cta-outline-white text-decoration-none">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
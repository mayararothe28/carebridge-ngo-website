import { useState, useEffect, useRef } from "react";
import "./Home.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCountUp } from "../hooks/useCountUp";
import { Link } from "react-router-dom";


function StatCard({ end, suffix, label, icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div className="col-6 col-lg-3 mb-4" ref={ref}>
      <div className="stat-card">
        <i className={`bi ${icon}`}></i>
        <h3>
          {count.toLocaleString()}
          {suffix}
        </h3>
        <p>{label}</p>
      </div>
    </div>
  );
}

function Home() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    impact: useScrollAnimation(),
    about: useScrollAnimation(),
    work: useScrollAnimation(),
    campaigns: useScrollAnimation(),
    stories: useScrollAnimation(),
    events: useScrollAnimation(),
    donate: useScrollAnimation(),
  };

  const [donateAmount, setDonateAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [donateSuccess, setDonateSuccess] = useState(false);

  const handleAmountClick = (amount) => {
    setDonateAmount(amount);
    setCustomAmount("");
    setDonateSuccess(false);
  };

  const handleCustomChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val && !isNaN(val) && Number(val) > 0) {
      setDonateAmount(Number(val));
    }
  };

  const handleDonate = () => {
    if (donateAmount > 0) {
      setDonateSuccess(true);
      setTimeout(() => setDonateSuccess(false), 4000);
    }
  };

  return (
    <div>
     
      <section className="hero" id="home" ref={sectionRefs.hero}>
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="fade-in">
                <span className="hero-badge">
                  <i className="bi bi-heart-fill"></i> CareBridge NGO
                </span>
                <h1>
                  Together We Care.
                  <br />
                  <span className="text-accent">Together We Change.</span>
                </h1>
                <p className="hero-desc">
                  We support children, families and communities through
                  education, food, healthcare and meaningful volunteer
                  activities. Every small action creates a lasting impact.
                </p>
                <div className="hero-btns">
                  <a href="#donate" className="btn-cta-primary">
                    <i className="bi bi-heart-fill"></i> Donate Now
                  </a>
                  <Link to="/register" className="btn-cta-outline">
                    Become a Volunteer
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
                <div className="hero-trust">
                  <div className="trust-avatars">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
                      alt="Volunteer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                      alt="Volunteer"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
                      alt="Volunteer"
                    />
                  </div>
                  <span>
                    300+ volunteers <strong>making a difference</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual fade-in">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                  alt="Children supported by NGO"
                  className="hero-img"
                />
                <div className="hero-float-card">
                  <span className="float-number">10K+</span>
                  <span className="float-label">Meals Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact" ref={sectionRefs.impact}>
        <div className="container">
          <div className="row horizontal-scroll-mobile">
            <StatCard end={500} suffix="+" label="Children Educated" icon="bi-mortarboard-fill" />
            <StatCard end={10000} suffix="+" label="Meals Provided" icon="bi-cup-hot-fill" />
            <StatCard end={2000} suffix="+" label="Healthcare Support" icon="bi-hospital-fill" />
            <StatCard end={300} suffix="+" label="Active Volunteers" icon="bi-people-fill" />
          </div>
        </div>
      </section>

      
      <section className="about-home" id="about" ref={sectionRefs.about}>
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6 fade-in-left mb-4 mb-lg-0">
              <div className="about-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80"
                  alt="CareBridge volunteers"
                  className="about-img"
                />
                <div className="about-experience">
                  <strong>5+</strong>
                  <span>Years of Community Impact</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 fade-in-right">
              <div className="about-text">
                <span className="section-label">About CareBridge</span>
                <h2>Building a Better Future for Everyone</h2>
                <p>
                  CareBridge is a community-focused NGO working to create better
                  opportunities for children and families. We connect people who
                  want to help with communities that need support.
                </p>
                <p>
                  Our mission is simple — when people come together with
                  compassion and responsibility, real change happens. From rural
                  schools to urban healthcare camps, we bring resources where
                  they matter most.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Transparent & Accountable</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Community-Driven Programs</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Volunteer-Powered Impact</span>
                  </div>
                </div>
                <a href="/about" className="btn-learn-more">
                  Learn More About Us <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="work" id="work" ref={sectionRefs.work}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Our Work</span>
            <h2>Where Your Support Goes</h2>
            <p className="section-subtitle">
              We focus on four key areas that directly improve lives in our
              communities.
            </p>
          </div>

          <div className="row horizontal-scroll-mobile">
            {[
              {
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
                title: "Child Education",
                desc: "Books, learning materials, school supplies, and tutoring support for children who need it most.",
                icon: "bi-book-half",
                link: "/work/education"
              },
              {
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
                title: "Food Support",
                desc: "Nutritious meals and essential food packages for families facing difficult circumstances.",
                icon: "bi-cup-hot",
                link: "/work/food"
              },
              {
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
                title: "Healthcare",
                desc: "Medical assistance, health awareness camps, and access to essential healthcare services.",
                icon: "bi-hospital",
                link: "/work/health"
              },
              {
                img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
                title: "Volunteering",
                desc: "Opportunities to contribute your time, skills and energy to create meaningful change.",
                icon: "bi-people",
                link: "/work/community"
              },
            ].map((item, i) => (
              <div className="col-md-6 col-lg-3 mb-4" key={i}>
                <Link to={item.link} className={`work-card fade-in stagger-${i + 1} text-decoration-none d-block`}>
                  <div className="work-card-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="work-card-body text-dark">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="campaigns" id="campaigns" ref={sectionRefs.campaigns}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Featured Campaigns</span>
            <h2>Support a Cause That Matters</h2>
            <p className="section-subtitle">
              Active campaigns where your contribution makes a direct difference.
            </p>
          </div>

          <div className="row horizontal-scroll-mobile">
            {[
              {
                img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80",
                title: "Back to School Drive 2026",
                desc: "Help us provide school kits, uniforms and learning materials for 200+ children across rural Maharashtra before the new academic year begins.",
                tag: "Education",
                raised: "₹1.2L",
                goal: "₹3L",
                percent: 40,
              },
              {
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
                title: "Community Health Camp",
                desc: "Free health checkups, medicines and awareness sessions for underserved communities in Pune and Nagpur. Doctors needed too!",
                tag: "Healthcare",
                raised: "₹85K",
                goal: "₹2L",
                percent: 42,
              },
              {
                img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
                title: "Feed a Family This Diwali",
                desc: "Provide festive meals and essential grocery kits to 500 families this Diwali. Because every family deserves to celebrate.",
                tag: "Food Support",
                raised: "₹2.5L",
                goal: "₹5L",
                percent: 50,
              },
            ].map((c, i) => (
              <div className="col-md-6 col-lg-4 mb-4" key={i}>
                <Link to={`/campaign/${i + 1}`} className={`campaign-card fade-in stagger-${i + 1} text-decoration-none d-block text-dark`}>
                  <div className="campaign-img">
                    <img src={c.img} alt={c.title} />
                    <span className="campaign-badge">{c.tag}</span>
                  </div>
                  <div className="campaign-body text-dark">
                    <h3>{c.title}</h3>
                    <p className="text-muted">{c.desc}</p>
                    <div className="campaign-progress">
                      <div className="progress-text">
                        <span>
                          Raised: <strong>{c.raised}</strong>
                        </span>
                        <span>
                          Goal: <strong>{c.goal}</strong>
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${c.percent}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="campaign-btn" style={{pointerEvents: 'none'}}>
                      <i className="bi bi-heart"></i> Support Campaign
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="stories blogs-preview" ref={sectionRefs.stories}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Our Blog</span>
            <h2>
              Latest <span className="text-accent">Updates & Insights</span>
            </h2>
          </div>

          <div className="row horizontal-scroll-mobile">
            {[
              {
                img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80",
                title: "How Digital Learning is Changing Rural Mumbai",
                desc: "Exploring the impact of smart classrooms and digital tablets in underprivileged schools.",
                date: "Oct 12, 2026"
              },
              {
                img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=400&q=80",
                title: "5 Ways You Can Support Local NGOs",
                desc: "You don't always need money to make a difference. Discover how you can help.",
                date: "Sep 28, 2026"
              },
              {
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80",
                title: "Highlights from Our Mega Medical Camp",
                desc: "Last weekend, over 500 residents received free medical checkups and medicines.",
                date: "Sep 15, 2026"
              },
            ].map((blog, i) => (
              <div className="col-lg-4 mb-4" key={i}>
                <Link to={`/blog/${i + 1}`} className={`story-card fade-in stagger-${i + 1} text-decoration-none d-block text-dark`} style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                  <img src={blog.img} alt={blog.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "10px" }}><i className="bi bi-calendar3"></i> {blog.date}</span>
                    <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>{blog.title}</h4>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", flexGrow: 1 }}>{blog.desc}</p>
                    <span style={{ fontWeight: "bold", color: "var(--primary)" }}>Read More <i className="bi bi-arrow-right"></i></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/blogs" className="btn-see-all" style={{ padding: "10px 25px", border: "2px solid var(--primary)", borderRadius: "30px", textDecoration: "none", color: "var(--primary)", fontWeight: "bold" }}>
              View All Blogs <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="events" id="events" ref={sectionRefs.events}>
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7 fade-in-left">
              <span className="section-label">Upcoming Events</span>
              <h2>Join Us in Making a Difference</h2>
            </div>
            <div className="col-lg-5 text-lg-end fade-in-right">
              <Link to="/events" className="btn-see-all">
                View All Events <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="row horizontal-scroll-mobile">
            {[
              {
                img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
                title: "Community Food Drive",
                desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",
                date: "15",
                month: "Oct",
              },
              {
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
                title: "Education Workshop",
                desc: "Help children learn through creative and engaging educational activities in local communities.",
                date: "22",
                month: "Oct",
              },
              {
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                title: "Health Awareness Camp",
                desc: "Free health checkups and awareness sessions for communities in partnership with local hospitals.",
                date: "30",
                month: "Oct",
              },
            ].map((e, i) => (
              <div className="col-md-6 col-lg-4 mb-4" key={i}>
                <Link to={`/event/${i + 1}`} className={`event-card fade-in stagger-${i + 1} text-decoration-none d-block text-dark`}>
                  <div className="event-card-img">
                    <img src={e.img} alt={e.title} />
                    <div className="event-date">
                      <strong>{e.date}</strong>
                      <span>{e.month}</span>
                    </div>  
                  </div>
                  <div className="event-card-body">
                    <h3>{e.title}</h3>
                    <p className="text-muted">{e.desc}</p>
                    <span className="event-link" style={{ fontWeight: "bold", color: "var(--primary)" }}>
                      Learn More <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      
      <section className="cta" id="volunteer">
        <div className="container">
        <div className="cta-box">
            <span>Be Part of the Change</span>
            <h2>
              Your Small Step Can Create
              <br />a <span className="text-accent">Big Difference</span>
            </h2>
            <p>
              Donate your resources, volunteer your time or simply spread the
              word. Together, we can build a better future for everyone.
            </p>
            <div className="cta-btns">
              <Link to="/donate" className="btn-cta-white text-decoration-none">
                <i className="bi bi-heart-fill"></i> Donate Now
              </Link>
              <Link to="/volunteer" className="btn-cta-outline-white text-decoration-none">
                Become a Volunteer <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
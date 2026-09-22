import "./Work.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

function Work() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    themes: useScrollAnimation(),
    cta: useScrollAnimation(),
  };

  const impactThemes = [
    {
      id: "education",
      title: "Child Education & Skills",
      subtitle: "Empowering the next generation",
      desc: "We believe education is the most powerful catalyst for social transformation. Our programs provide school supplies, tutoring, and crucial English speaking & communication skills training for rural children to prepare them for future careers.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      icon: "bi-book-half",
      stats: ["500+ Children", "Spoken English Classes", "100% Pass Rate"],
    },
    {
      id: "food",
      title: "Food & Nutrition",
      subtitle: "No one should go hungry",
      desc: "Proper nutrition is the foundation of a healthy life. We distribute essential food packages, run community kitchens, and educate families on nutritional best practices.",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      icon: "bi-cup-hot",
      stats: ["10K+ Meals", "200 Families", "Zero Waste"],
    },
    {
      id: "health",
      title: "Healthcare",
      subtitle: "Access to quality care",
      desc: "Our healthcare initiatives focus on preventative care, medical awareness camps, and providing critical health supplies to remote communities that lack infrastructure.",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
      icon: "bi-hospital",
      stats: ["2K+ Patients", "50 Camps", "24/7 Support"],
    },
    {
      id: "community",
      title: "Community Development",
      subtitle: "Building sustainable futures",
      desc: "We work directly with community leaders to create sustainable livelihood programs, women empowerment workshops, and environmental conservation drives.",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
      icon: "bi-people",
      stats: ["12 Villages", "300 Women", "Skill Training"],
    },
  ];

  return (
    <main className="work-page">
      {/* Hero Section */}
      <section className="work-hero" ref={sectionRefs.hero}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 fade-in-left">
              <span className="section-label">Our Impact Themes</span>
              <h1>Driving Sustainable Social Impact</h1>
              <p className="work-hero-desc">
                Discover how CareBridge ensures meaningful social impact through focused 
                programs in education, healthcare, nutrition, and sustainable community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Themes List */}
      <section className="impact-themes-section" ref={sectionRefs.themes}>
        <div className="container">
          {impactThemes.map((theme, index) => (
            <div 
              className={`theme-row row align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} 
              key={theme.id}
              id={theme.id}
            >
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className={`theme-image-wrapper fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <img src={theme.img} alt={theme.title} className="theme-img" />
                  <div className="theme-icon-badge">
                    <i className={`bi ${theme.icon}`}></i>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className={`theme-content fade-in-${index % 2 === 0 ? 'right' : 'left'} ${index % 2 !== 0 ? 'pe-lg-5' : 'ps-lg-5'}`}>
                  <span className="theme-subtitle">{theme.subtitle}</span>
                  <h2>{theme.title}</h2>
                  <p>{theme.desc}</p>
                  
                  <div className="theme-stats">
                    {theme.stats.map((stat, i) => (
                      <div className="theme-stat-item" key={i}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

   
      <section className="work-cta" ref={sectionRefs.cta}>
        <div className="container text-center fade-in">
          <h2>Ready to Create an Impact?</h2>
          <p>Join us in our mission to uplift communities and transform lives.</p>
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

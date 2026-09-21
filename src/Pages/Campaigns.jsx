import "./Campaigns.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

function Campaigns() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    grid: useScrollAnimation(),
  };

  const campaignsList = [
    {
      img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80",
      title: "Back to School Drive 2026",
      desc: "Help us provide school kits, uniforms and learning materials for 200+ children across rural Mumbai before the new academic year begins.",
      tag: "Education",
      raised: "₹1.2L",
      goal: "₹3L",
      percent: 40,
    },
    {
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      title: "Community Health Camp",
      desc: "Free health checkups, medicines and awareness sessions for underserved communities in Mumbai. Doctors needed too!",
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
    {
      img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
      title: "Women's Skill Training",
      desc: "Funding tailoring machines and raw materials to train 50 women in sustainable tailoring, granting them financial independence.",
      tag: "Community",
      raised: "₹1.8L",
      goal: "₹2.5L",
      percent: 72,
    },
    {
      img: "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=800&q=80",
      title: "Clean Drinking Water Initiative",
      desc: "Installing water purifiers and building safe drinking water stations in 5 remote villages facing severe drought conditions.",
      tag: "Health",
      raised: "₹3.5L",
      goal: "₹4L",
      percent: 87,
    },
    {
      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      title: "Winter Blankets Distribution",
      desc: "Providing heavy winter blankets and warm clothing to the homeless in urban centers before the temperature drops.",
      tag: "Relief",
      raised: "₹40K",
      goal: "₹1L",
      percent: 40,
    },
  ];

  return (
    <main className="campaigns-page">
      
<section className="campaigns-hero" ref={sectionRefs.hero}>
        <div className="container text-center">
          <span className="section-label">Active Causes</span>
          <h1>Campaigns That Need Your Help</h1>
          <p>
            Choose a cause close to your heart. Every contribution goes directly toward 
            making a tangible difference in the lives of those who need it most.
          </p>
        </div>
      </section>

      
      <section className="campaigns-grid-section bg-light" ref={sectionRefs.grid}>
        <div className="container">
          <div className="row">
            {campaignsList.map((c, i) => (
              <div className="col-md-6 col-lg-4 mb-5" key={i}>
                <div className="campaign-card">
                  <div className="campaign-card-img">
                    <img src={c.img} alt={c.title} />
                    <span className="campaign-tag">{c.tag}</span>
                  </div>
                  <div className="campaign-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="campaign-progress">
                      <div className="progress-info">
                        <span>
                          Raised: <strong>{c.raised}</strong>
                        </span>
                        <span>
                          Goal: <strong>{c.goal}</strong>
                        </span>
                      </div>
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${c.percent}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link to={`/campaign/${i + 1}`} className="campaign-btn w-100 text-center justify-content-center">
                      View Details & Donate
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Campaigns;

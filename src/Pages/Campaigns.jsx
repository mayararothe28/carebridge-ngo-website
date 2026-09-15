import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCampaigns } from "../Services/Api";
import "./Campaigns.css";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        setCampaigns(data.slice(0, 6));
      } catch (error) {
        setError("Unable to load campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const campaignImages = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  ];

  const campaignGoals = [
    50000,
    75000,
    100000,
    60000,
    80000,
    120000
  ];

  const campaignRaised = [
    32000,
    51000,
    68000,
    42000,
    59000,
    76000
  ];

  return (
    <div className="campaigns-page">

      
      <section className="campaign-hero">
        <div className="container">
          <div className="campaign-hero-content">
            <span>OUR CAMPAIGNS</span>

            <h1>Together, We Can Make a Difference</h1>

            <p>
              Every campaign is an opportunity to bring people together,
              support communities, and create meaningful change.
            </p>
          </div>
        </div>
      </section>


      
      <section className="campaign-intro py-5">
        <div className="container text-center">

          <span className="section-label">MAKE AN IMPACT</span>

          <h2>Support a Campaign</h2>

          <p className="campaign-intro-text">
            Our campaigns focus on education, food support, healthcare,
            and community development. Your support helps us reach more
            people and create a better future.
          </p>

        </div>
      </section>


      
      <section className="campaign-list-section pb-5">
        <div className="container">

          {loading && (
            <div className="campaign-message">
              <div className="spinner-border text-success"></div>
              <p>Loading campaigns...</p>
            </div>
          )}

          {error && (
            <div className="campaign-message">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="row g-4">

              {campaigns.map((campaign, index) => {

                const goal = campaignGoals[index];
                const raised = campaignRaised[index];

                const progress = Math.round((raised / goal) * 100);

                return (
                  <div className="col-lg-4 col-md-6" key={campaign.id}>

                    <div className="campaign-card">

                      <img
                        src={campaignImages[index]}
                        alt={campaign.title}
                        className="campaign-image"
                      />

                      <div className="campaign-content">

                        <span className="campaign-tag">
                          CareBridge Campaign
                        </span>

                        <h3>
                          {campaign.title}
                        </h3>

                        <p>
                          {campaign.body}
                        </p>

                        
                        <div className="campaign-money">

                          <div>
                            <small>Raised</small>
                            <strong>₹{raised.toLocaleString()}</strong>
                          </div>

                          <div>
                            <small>Goal</small>
                            <strong>₹{goal.toLocaleString()}</strong>
                          </div>

                        </div>


                        
                        <div className="progress campaign-progress">

                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${progress}%` }}
                          >
                            {progress}%
                          </div>

                        </div>


                       
                        <Link
                          to="/donate"
                          className="campaign-btn"
                        >
                          Support Campaign
                        </Link>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

        </div>
      </section>


     
      <section className="why-campaign-section py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="section-label">
              WHY SUPPORT US?
            </span>

            <h2>Every Contribution Creates Impact</h2>

            <p className="section-description">
              When you support a CareBridge campaign, you become
              part of a community working towards positive change.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="campaign-feature-card">

                <div className="feature-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>

                <h3>Real Impact</h3>

                <p>
                  Your contribution helps provide education,
                  food, healthcare, and support to communities.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="campaign-feature-card">

                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <h3>Transparent</h3>

                <p>
                  We believe in responsible and transparent
                  community support.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="campaign-feature-card">

                <div className="feature-icon">
                  <i className="bi bi-people-fill"></i>
                </div>

                <h3>Community Driven</h3>

                <p>
                  Our campaigns bring volunteers, supporters,
                  and communities together.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="campaign-feature-card">

                <div className="feature-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <h3>Every Contribution Matters</h3>

                <p>
                  Small contributions can create meaningful
                  change when we work together.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      
      <section className="how-help-section py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="section-label">
              GET INVOLVED
            </span>

            <h2>How You Can Help</h2>

            <p className="section-description">
              There are many ways you can support our mission.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="help-card">

                <i className="bi bi-cash-coin"></i>

                <h3>Donate</h3>

                <p>
                  Your donation helps us continue our campaigns
                  and reach people who need support.
                </p>

                <Link to="/donate">
                  Donate Now
                </Link>

              </div>

            </div>


            <div className="col-md-4">

              <div className="help-card">

                <i className="bi bi-person-heart"></i>

                <h3>Volunteer</h3>

                <p>
                  Join our volunteer community and contribute
                  your time and skills to meaningful causes.
                </p>

                <a href="#register">
                  Become a Volunteer
                </a>

              </div>

            </div>


            <div className="col-md-4">

              <div className="help-card">

                <i className="bi bi-megaphone-fill"></i>

                <h3>Spread Awareness</h3>

                <p>
                  Share our campaigns with your friends and
                  family and help us reach more people.
                </p>
<Link to="/contact" className="help-contact-btn">
  Share Our Mission
</Link>

              </div>

            </div>

          </div>

        </div>

      </section>


     
      <section className="campaign-cta py-5">

        <div className="container text-center">

          <h2>Be Part of the Change</h2>

          <p>
            Together, we can create stronger communities
            and a better future for everyone.
          </p>
<div className="cta-buttons">

  <Link
    to="/donate"
    className="cta-donate-btn"
  >
    Donate Now
  </Link>

  <Link
    to="/register"
    className="cta-volunteer-btn"
  >
    Become a Volunteer
  </Link>

</div>

        </div>

      </section>

    </div>
  );
}

export default Campaigns;
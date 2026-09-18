import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CampaignDetails.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CampaignDetails() {
  const { id } = useParams();
  const sectionRef = useScrollAnimation();

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

  // Mock data for campaign details
  const campaignData = {
    img: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=80",
    title: "Education For Every Child",
    tag: "Education",
    desc: "Help us provide school kits, uniforms and learning materials for 200+ children across rural Mumbai before the new academic year begins. Education is the most powerful weapon which you can use to change the world. By donating to this cause, you are directly funding a child's future.",
    raised: "₹1.2L",
    goal: "₹3L",
    percent: 40,
    donors: 124,
    daysLeft: 15,
    fullDescription: [
      "Many children in rural areas drop out of school simply because they cannot afford basic supplies like notebooks, uniforms, or even a proper school bag.",
      "Our 'Education For Every Child' campaign is designed to eliminate these basic barriers. We partner with local schools to identify the children most in need.",
      "Your donation will provide a comprehensive 'Back to School Kit' which includes 10 notebooks, stationary, a durable school bag, and two pairs of uniforms."
    ]
  };

  return (
    <main className="campaign-details-page" ref={sectionRef}>
      {/* Details Header */}
      <section className="cd-header fade-in">
        <div className="container">
          <Link to="/campaigns" className="back-link">
            <i className="bi bi-arrow-left"></i> Back to Campaigns
          </Link>
          <div className="cd-header-content text-center">
            <span className="cd-badge">{campaignData.tag}</span>
            <h1>{campaignData.title}</h1>
          </div>
        </div>
      </section>

      {/* Details Main Content */}
      <section className="cd-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 fade-in-left">
              <div className="cd-image">
                <img src={campaignData.img} alt={campaignData.title} />
              </div>
              <div className="cd-description">
                <h2>About the Campaign</h2>
                <p className="lead-text">{campaignData.desc}</p>
                {campaignData.fullDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="col-lg-4 fade-in-right">
              <div className="cd-donation-card sticky-top" style={{ top: '100px' }}>
                <h3>Donation Goal</h3>
                <div className="cd-progress-wrapper">
                  <div className="cd-progress-stats">
                    <span className="raised">{campaignData.raised} Raised</span>
                    <span className="goal">of {campaignData.goal}</span>
                  </div>
                  <div className="cd-progress-track">
                    <div className="cd-progress-fill" style={{ width: `${campaignData.percent}%` }}></div>
                  </div>
                  <div className="cd-progress-meta">
                    <span><strong>{campaignData.donors}</strong> Donors</span>
                    <span><strong>{campaignData.daysLeft}</strong> Days Left</span>
                  </div>
                </div>

                <div className="cd-donate-form">
                  {donateSuccess ? (
                    <div className="donate-success-msg text-center mt-4">
                      <i className="bi bi-check-circle-fill"></i>
                      <h3 className="text-success mt-3 mb-2">Thank You!</h3>
                      <p>Your donation of <strong>₹{donateAmount.toLocaleString()}</strong> towards this campaign has been recorded.</p>
                    </div>
                  ) : (
                    <>
                      <h4>Select Amount</h4>
                      <div className="amount-options">
                        {[500, 1000, 2000, 5000].map((amt) => (
                          <button
                            key={amt}
                            className={`amount-btn ${donateAmount === amt && !customAmount ? "active" : ""}`}
                            onClick={() => handleAmountClick(amt)}
                          >
                            ₹{amt.toLocaleString()}
                          </button>
                        ))}
                      </div>
                      
                      <div className="cd-custom-amount mt-3">
                        <label>Custom Amount</label>
                        <div className="custom-input-group mt-1">
                          <span className="currency-symbol">₹</span>
                          <input 
                            type="number" 
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={handleCustomChange} 
                          />
                        </div>
                      </div>

                      <button className="btn-donate-large w-100 mt-4" onClick={handleDonate}>
                        Donate ₹{donateAmount.toLocaleString()} <i className="bi bi-heart-fill ms-2"></i>
                      </button>
                    </>
                  )}
                </div>
                
                <div className="secure-payment">
                  <i className="bi bi-shield-lock-fill"></i> 100% Secure Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CampaignDetails;

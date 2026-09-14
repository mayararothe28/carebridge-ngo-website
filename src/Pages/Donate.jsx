
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Donate.css";

function Donate() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("Child Education");
  const [showMessage, setShowMessage] = useState(false);
  const [phone, setPhone] = useState("");

  const handleAmount = (value) => {
    setAmount(value);
    setCustomAmount("");
    setShowMessage(false);
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setCustomAmount(value);
    setAmount(Number(value));
    setShowMessage(false);
  };

  const handleDonate = (e) => {
    e.preventDefault();

    // Amount validation
    if (!amount || amount <= 0) {
      alert("Please select or enter a donation amount.");
      return;
    }

    // Phone validation
    if (!phone || phone.length !== 10) {
      alert("Enter your mobile number");
      return;
    }

    // All details are valid
    setShowMessage(true);
  };

  return (
    <div className="donate-page">

      {/* ================= HERO ================= */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <span>SUPPORT OUR MISSION</span>

          <h1>
            Your Small Contribution
            <br />
            Can Create a Big Change
          </h1>

          <p>
            Your support helps us provide education, food, healthcare
            and opportunities to communities in need.
          </p>
        </div>
      </section>


      {/* ================= DONATION SECTION ================= */}
      <section className="donation-section">
        <div className="container">

          <div className="donation-heading">
            <span>MAKE AN IMPACT</span>
            <h2>Support Our Mission</h2>

            <p>
              Every contribution brings us one step closer to creating
              stronger and healthier communities.
            </p>
          </div>


          <div className="row g-4">

            {/* ================= LEFT FORM ================= */}
            <div className="col-lg-7">

              <div className="donation-form-card">

                <h3>
                  <i className="bi bi-heart-fill"></i>
                  Make a Donation
                </h3>

                <p className="form-description">
                  Choose an amount and tell us how you would like
                  your donation to make an impact.
                </p>


                {/* ================= FORM START ================= */}
                <form onSubmit={handleDonate}>

                  {/* AMOUNT */}
                  <div className="form-group">
                    <label>Choose Donation Amount</label>

                    <div className="amount-buttons">

                      <button
                        type="button"
                        className={
                          amount === 500 && !customAmount
                            ? "amount-btn active"
                            : "amount-btn"
                        }
                        onClick={() => handleAmount(500)}
                      >
                        ₹500
                      </button>

                      <button
                        type="button"
                        className={
                          amount === 1000 && !customAmount
                            ? "amount-btn active"
                            : "amount-btn"
                        }
                        onClick={() => handleAmount(1000)}
                      >
                        ₹1,000
                      </button>

                      <button
                        type="button"
                        className={
                          amount === 2000 && !customAmount
                            ? "amount-btn active"
                            : "amount-btn"
                        }
                        onClick={() => handleAmount(2000)}
                      >
                        ₹2,000
                      </button>

                      <button
                        type="button"
                        className={
                          amount === 5000 && !customAmount
                            ? "amount-btn active"
                            : "amount-btn"
                        }
                        onClick={() => handleAmount(5000)}
                      >
                        ₹5,000
                      </button>

                      <button
                        type="button"
                        className={
                          amount === 10000 && !customAmount
                            ? "amount-btn active"
                            : "amount-btn"
                        }
                        onClick={() => handleAmount(10000)}
                      >
                        ₹10,000
                      </button>

                    </div>

                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      inputMode="numeric"
                    />
                  </div>


                  {/* PURPOSE */}
                  <div className="form-group">
                    <label>Choose Where Your Donation Goes</label>

                    <div className="purpose-grid">

                      <button
                        type="button"
                        className={
                          purpose === "Child Education"
                            ? "purpose-card active"
                            : "purpose-card"
                        }
                        onClick={() => {
                          setPurpose("Child Education");
                          setShowMessage(false);
                        }}
                      >
                        <i className="bi bi-mortarboard-fill"></i>
                        <span>Child Education</span>
                      </button>


                      <button
                        type="button"
                        className={
                          purpose === "Food Support"
                            ? "purpose-card active"
                            : "purpose-card"
                        }
                        onClick={() => {
                          setPurpose("Food Support");
                          setShowMessage(false);
                        }}
                      >
                        <i className="bi bi-egg-fried"></i>
                        <span>Food Support</span>
                      </button>


                      <button
                        type="button"
                        className={
                          purpose === "Healthcare"
                            ? "purpose-card active"
                            : "purpose-card"
                        }
                        onClick={() => {
                          setPurpose("Healthcare");
                          setShowMessage(false);
                        }}
                      >
                        <i className="bi bi-heart-pulse-fill"></i>
                        <span>Healthcare</span>
                      </button>


                      <button
                        type="button"
                        className={
                          purpose === "General Support"
                            ? "purpose-card active"
                            : "purpose-card"
                        }
                        onClick={() => {
                          setPurpose("General Support");
                          setShowMessage(false);
                        }}
                      >
                        <i className="bi bi-people-fill"></i>
                        <span>General Support</span>
                      </button>

                    </div>
                  </div>


                  {/* DONOR DETAILS */}
                  <div className="form-group">
                    <label>Your Details</label>

                    <div className="row g-3">

                      {/* NAME */}
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your full name"
                          required
                          onChange={() => setShowMessage(false)}
                        />
                      </div>


                      {/* EMAIL */}
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          required
                          onChange={() => setShowMessage(false)}
                        />
                      </div>


                      {/* PHONE */}
                      <div className="col-12">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);

                            setPhone(value);
                            setShowMessage(false);
                          }}
                          maxLength={10}
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          title="Please enter exactly 10 digits"
                          required
                        />
                      </div>

                    </div>
                  </div>


                  {/* DONATE BUTTON */}
                  <button
                    type="submit"
                    className="main-donate-btn"
                  >
                    <i className="bi bi-heart-fill"></i>
                    Donate Now
                  </button>

                </form>
                {/* ================= FORM END ================= */}


                {/* THANK YOU MESSAGE */}
                {showMessage && (
                  <div className="success-message">

                    <div className="success-icon">
                      <i className="bi bi-check-circle-fill"></i>
                    </div>

                    <div>
                      <h4>Thank You!</h4>

                      <p>
                        Your contribution of ₹
                        {amount.toLocaleString("en-IN")}
                        {" "}will help us create a positive impact.
                      </p>

                      <strong>
                        Together We Care. Together We Change.
                      </strong>
                    </div>

                  </div>
                )}

              </div>

            </div>


            {/* ================= RIGHT SUMMARY ================= */}
            <div className="col-lg-5">

              <div className="donation-summary">

                <div className="summary-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>

                <h3>Donation Summary</h3>

                <p>
                  Your support can make a real difference in someone's life.
                </p>


                <div className="summary-row">
                  <span>Donation Amount</span>

                  <strong>
                    ₹{(amount || 0).toLocaleString("en-IN")}
                  </strong>
                </div>


                <div className="summary-row">
                  <span>Purpose</span>

                  <strong>{purpose}</strong>
                </div>


                <div className="summary-line"></div>


                <div className="summary-total">
                  <span>Total</span>

                  <strong>
                    ₹{(amount || 0).toLocaleString("en-IN")}
                  </strong>
                </div>


                <div className="summary-note">
                  <i className="bi bi-info-circle-fill"></i>

                  <span>
                    This is a donation form.
                   
                  </span>
                </div>

              </div>


              {/* TRUST BOX */}
              <div className="trust-box">

                <h4>
                  <i className="bi bi-shield-check"></i>
                  Why Support CareBridge?
                </h4>


                <div className="trust-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Transparent & Responsible</span>
                </div>


                <div className="trust-item">
                  <i className="bi bi-heart-fill"></i>
                  <span>Every Contribution Matters</span>
                </div>


                <div className="trust-item">
                  <i className="bi bi-people-fill"></i>
                  <span>Community Driven</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= IMPACT SECTION ================= */}
      <section className="donation-impact">

        <div className="container">

          <div className="donation-heading">
            <span>YOUR SUPPORT MATTERS</span>

            <h2>Every Contribution Creates Impact</h2>

            <p>
              Your donation helps us support people and communities
              through meaningful programs.
            </p>
          </div>


          <div className="row g-4">

            <div className="col-md-4">
              <div className="impact-card">

                <div className="impact-icon">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>

                <h3>Education</h3>

                <p>
                  Help children get access to education and
                  learning opportunities.
                </p>

              </div>
            </div>


            <div className="col-md-4">
              <div className="impact-card">

                <div className="impact-icon">
                  <i className="bi bi-egg-fried"></i>
                </div>

                <h3>Food Support</h3>

                <p>
                  Help provide nutritious meals to families
                  and communities in need.
                </p>

              </div>
            </div>


            <div className="col-md-4">
              <div className="impact-card">

                <div className="impact-icon">
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>

                <h3>Healthcare</h3>

                <p>
                  Support healthcare initiatives and health
                  awareness programs.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="donation-final-cta">

        <div className="container">

          <h2>Want to Make a Difference in Another Way?</h2>

          <p>
            Your time and support can also help us create lasting change.
          </p>


          <div className="final-buttons">

            <a href="#register" className="volunteer-btn">
              <i className="bi bi-people-fill"></i>
              Become a Volunteer
            </a>


            <Link to="/campaigns" className="campaign-btn">
              <i className="bi bi-megaphone-fill"></i>
              Explore Our Campaigns
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Donate;


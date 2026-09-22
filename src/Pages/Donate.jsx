import { useState } from "react";
import "./Donate.css";

function Donate() {
  const [amount, setAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("monthly");

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setAmount("custom");
  };

  return (
    <main className="donate-page bg-light py-5">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="donate-wrapper shadow-lg">
              <div className="row g-0">
                
                {/* Left Side: Impact Information */}
                <div className="col-md-5 donate-info-panel text-white p-5 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-white text-accent mb-3 px-3 py-2 rounded-pill fw-bold">Secure Donation</span>
                    <h2 className="fw-bold mb-4">Your Contribution Changes Lives</h2>
                    <p className="mb-4">Every rupee you donate goes directly towards providing education, meals, and healthcare to those who need it the most.</p>
                    
                    <ul className="impact-list list-unstyled mt-4">
                      <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-accent me-3 fs-5"></i>
                        <span><strong>₹500</strong> feeds a child for a week</span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-accent me-3 fs-5"></i>
                        <span><strong>₹1,000</strong> provides medical supplies</span>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-accent me-3 fs-5"></i>
                        <span><strong>₹5,000</strong> sponsors a child's education</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="trust-badges mt-5">
                    <p className="small mb-2 opacity-75">100% Secure & Tax Deductible (80G)</p>
                    <div className="d-flex gap-3 fs-3">
                      <i className="bi bi-shield-check"></i>
                      <i className="bi bi-lock-fill"></i>
                      <i className="bi bi-credit-card-2-front"></i>
                    </div>
                  </div>
                </div>

                {/* Right Side: Donation Form */}
                <div className="col-md-7 p-5 bg-white">
                  <h3 className="fw-bold mb-4">Make a Donation</h3>
                  
                  {/* Donation Type */}
                  <div className="donation-type-toggle mb-4">
                    <button 
                      className={`btn-toggle ${donationType === 'monthly' ? 'active' : ''}`}
                      onClick={() => setDonationType('monthly')}
                    >
                      Give Monthly
                    </button>
                    <button 
                      className={`btn-toggle ${donationType === 'once' ? 'active' : ''}`}
                      onClick={() => setDonationType('once')}
                    >
                      Give Once
                    </button>
                  </div>

                  {/* Preset Amounts */}
                  <div className="preset-amounts mb-4">
                    {['500', '1000', '2500', '5000'].map((val) => (
                      <button
                        key={val}
                        className={`btn-amount ${amount === val ? 'active' : ''}`}
                        onClick={() => handleAmountClick(val)}
                      >
                        ₹{val}
                      </button>
                    ))}
                    <div className="custom-amount-wrapper mt-3">
                      <span className="currency-symbol">₹</span>
                      <input 
                        type="number" 
                        className={`form-control custom-amount-input ${amount === 'custom' ? 'active' : ''}`}
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        onClick={() => setAmount('custom')}
                      />
                    </div>
                  </div>

                  {/* Donor Form */}
                  <form className="donor-form mb-5">
                    <div className="row g-3 mb-4">
                      <div className="col-sm-6">
                        <label className="form-label text-muted small fw-bold">First Name</label>
                        <input type="text" className="form-control" placeholder="Satyam" required onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '')} />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label text-muted small fw-bold">Last Name</label>
                        <input type="text" className="form-control" placeholder="Sharma" required onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '')} />
                      </div>
                      <div className="col-sm-12">
                        <label className="form-label text-muted small fw-bold">Email Address</label>
                        <input type="email" className="form-control" placeholder="satyam@example.com" required />
                      </div>
                      <div className="col-sm-12">
                        <label className="form-label text-muted small fw-bold">PAN Number (For Tax Receipt)</label>
                        <input type="text" className="form-control text-uppercase" placeholder="ABCDE1234F" />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-accent w-100 py-3 fw-bold fs-5 shadow-sm btn-donate-submit">
                      Proceed to Pay ₹{amount === 'custom' ? (customAmount || '0') : amount}
                    </button>
                  </form>

                  {/* Offline / Direct Donation Methods */}
                  <div className="offline-donations pt-4 border-top">
                    <h4 className="fw-bold mb-4 text-center">Other Ways to Donate</h4>
                    
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="p-3 bg-light rounded text-center h-100 border">
                          <h6 className="fw-bold text-accent mb-3"><i className="bi bi-qr-code-scan me-2"></i>Scan & Pay (UPI)</h6>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="UPI QR Code" className="img-fluid mb-2" style={{width: "120px", height: "120px", opacity: "0.8"}} />
                          <p className="small text-muted mb-0 fw-bold">UPI ID: carebridge@sbi</p>
                          <p className="small text-muted" style={{fontSize: "11px"}}>GPay / PhonePe / Paytm</p>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="p-3 bg-light rounded h-100 border">
                          <h6 className="fw-bold text-accent mb-3 text-center"><i className="bi bi-bank me-2"></i>Bank Transfer (NEFT/RTGS)</h6>
                          <div className="small text-muted">
                            <p className="mb-1"><strong>Acct Name:</strong> CareBridge Foundation</p>
                            <p className="mb-1"><strong>Acct No:</strong> 39284719203</p>
                            <p className="mb-1"><strong>IFSC Code:</strong> SBIN0001234</p>
                            <p className="mb-0"><strong>Bank/Branch:</strong> SBI, Andheri West</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Donate;

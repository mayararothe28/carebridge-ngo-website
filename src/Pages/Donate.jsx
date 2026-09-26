import { useState } from "react";
import "./Donate.css";

function Donate() {
  const [amount, setAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("monthly");

  const [paymentScreen, setPaymentScreen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;

    setCustomAmount(value);
    setAmount("custom");
  };

  const getFinalAmount = () => {
    if (amount === "custom") {
      return Number(customAmount);
    }

    return Number(amount);
  };

  const handleProceedToPay = (e) => {
    e.preventDefault();

    const finalAmount = getFinalAmount();

    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setPaymentSuccess(false);
    setPaymentScreen(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePayment = () => {
    const finalAmount = getFinalAmount();

    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const randomId =
      "CB" +
      Math.floor(100000000 + Math.random() * 900000000);

    setTransactionId(randomId);
    setPaymentSuccess(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackToDonation = () => {
    setPaymentScreen(false);
    setPaymentSuccess(false);
  };

  return (
    <main className="donate-page bg-light py-4">

      <div className="container mt-2">

        {/* ================= PAYMENT SUCCESS ================= */}

        {paymentSuccess ? (
          <div className="payment-success-wrapper">

            <div className="payment-success-card">

              <div className="payment-success-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <h1>Payment Successful!</h1>

              <p className="success-main-text">
                Thank you for supporting CareBridge.
              </p>

              <div className="success-amount">
                ₹{getFinalAmount().toLocaleString("en-IN")}
              </div>

              <p className="success-sub-text">
                Your contribution has been recorded successfully.
              </p>

              <div className="transaction-box">

                <div>
                  <span>Transaction ID</span>
                  <strong>{transactionId}</strong>
                </div>

                <div>
                  <span>Donation Amount</span>
                  <strong>
                    ₹{getFinalAmount().toLocaleString("en-IN")}
                  </strong>
                </div>

                <div>
                  <span>Payment Method</span>
                  <strong>
                    {paymentMethod === "upi"
                      ? "UPI"
                      : paymentMethod === "card"
                      ? "Debit / Credit Card"
                      : "Net Banking"}
                  </strong>
                </div>

                <div>
                  <span>Donation Type</span>
                  <strong>
                    {donationType === "monthly"
                      ? "Monthly"
                      : "One Time"}
                  </strong>
                </div>

              </div>

              <div className="thank-you-message">
                <i className="bi bi-heart-fill"></i>
                <span>
                  Your support helps us create a positive impact
                  in communities.
                </span>
              </div>

              <button
                type="button"
                className="back-donation-btn"
                onClick={handleBackToDonation}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Make Another Donation
              </button>

              <p className="demo-payment-note">
                This is a frontend demo. No real payment was processed.
              </p>

            </div>

          </div>
        ) : paymentScreen ? (

          /* ================= PAYMENT SCREEN ================= */

          <div className="payment-screen">

            <button
              type="button"
              className="back-payment-btn"
              onClick={() => setPaymentScreen(false)}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Donation
            </button>

            <div className="payment-card">

              <div className="payment-header">

                <div className="payment-header-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>
                  <h2>Complete Your Payment</h2>
                  <p>Secure CareBridge donation demo</p>
                </div>

              </div>

              <div className="payment-amount-box">

                <span>Donation Amount</span>

                <h1>
                  ₹{getFinalAmount().toLocaleString("en-IN")}
                </h1>

                <small>
                  {donationType === "monthly"
                    ? "Monthly Donation"
                    : "One Time Donation"}
                </small>

              </div>

              <h4 className="payment-title">
                Choose Payment Method
              </h4>

              <div className="payment-methods">

                <button
                  type="button"
                  className={
                    paymentMethod === "upi"
                      ? "payment-method active"
                      : "payment-method"
                  }
                  onClick={() => setPaymentMethod("upi")}
                >
                  <i className="bi bi-phone"></i>
                  <span>UPI</span>
                  <small>GPay / PhonePe / Paytm</small>
                </button>

                <button
                  type="button"
                  className={
                    paymentMethod === "card"
                      ? "payment-method active"
                      : "payment-method"
                  }
                  onClick={() => setPaymentMethod("card")}
                >
                  <i className="bi bi-credit-card"></i>
                  <span>Card</span>
                  <small>Debit / Credit Card</small>
                </button>

                <button
                  type="button"
                  className={
                    paymentMethod === "netbanking"
                      ? "payment-method active"
                      : "payment-method"
                  }
                  onClick={() => setPaymentMethod("netbanking")}
                >
                  <i className="bi bi-bank"></i>
                  <span>Net Banking</span>
                  <small>All major banks</small>
                </button>

              </div>

              {/* UPI */}

              {paymentMethod === "upi" && (
                <div className="payment-detail-box">

                  <div className="payment-detail-icon">
                    <i className="bi bi-qr-code-scan"></i>
                  </div>

                  <h4>Pay using UPI</h4>

                  <p>
                    Scan the QR code or use your preferred UPI app.
                  </p>

                  <div className="demo-qr">
                    <i className="bi bi-qr-code"></i>
                  </div>

                  <p className="demo-payment-text">
                    UPI payment demo
                  </p>

                </div>
              )}

              {/* CARD */}

              {paymentMethod === "card" && (
                <div className="payment-detail-box">

                  <h4>
                    <i className="bi bi-credit-card me-2"></i>
                    Card Details
                  </h4>

                  <input
                    type="text"
                    className="payment-input"
                    placeholder="Card Number"
                    maxLength="16"
                  />

                  <div className="payment-input-row">

                    <input
                      type="text"
                      className="payment-input"
                      placeholder="MM / YY"
                      maxLength="5"
                    />

                    <input
                      type="password"
                      className="payment-input"
                      placeholder="CVV"
                      maxLength="3"
                    />

                  </div>

                </div>
              )}

              {/* NET BANKING */}

              {paymentMethod === "netbanking" && (
                <div className="payment-detail-box">

                  <h4>
                    <i className="bi bi-bank me-2"></i>
                    Select Your Bank
                  </h4>

                  <select className="payment-input">
                    <option value="">
                      Select Bank
                    </option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                  </select>

                </div>
              )}

              <button
                type="button"
                className="pay-now-btn"
                onClick={handlePayment}
              >
                <i className="bi bi-lock-fill me-2"></i>
                Pay ₹{getFinalAmount().toLocaleString("en-IN")}
              </button>

              <p className="payment-demo-note">
                <i className="bi bi-info-circle me-1"></i>
                Demo payment only. No real money will be charged.
              </p>

            </div>

          </div>

        ) : (

          /* ================= DONATION FORM ================= */

          <div className="row justify-content-center">

            <div className="col-lg-10">

              <div className="donate-wrapper shadow-lg">

                <div className="row g-0">

                  {/* LEFT SIDE */}

                  <div className="col-md-5 donate-info-panel text-white p-4 p-lg-5 d-flex flex-column justify-content-between">

                    <div>

                      <h2 className="fw-bold mb-3 text-white">
                        Your Contribution Changes Lives
                      </h2>

                      <p className="mb-4 text-white opacity-90">
                        Every rupee you donate goes directly towards
                        providing education, meals, and healthcare to
                        children and families in need.
                      </p>

                      <ul className="impact-list list-unstyled mt-3 mb-4">

                        <li className="mb-3 d-flex align-items-center text-white">
                          <i className="bi bi-check-circle-fill icon-orange me-3 fs-5"></i>
                          <span>
                            <strong>₹500</strong> feeds a child for a full week
                          </span>
                        </li>

                        <li className="mb-3 d-flex align-items-center text-white">
                          <i className="bi bi-check-circle-fill icon-orange me-3 fs-5"></i>
                          <span>
                            <strong>₹1,000</strong> provides essential medical supplies
                          </span>
                        </li>

                        <li className="mb-3 d-flex align-items-center text-white">
                          <i className="bi bi-check-circle-fill icon-orange me-3 fs-5"></i>
                          <span>
                            <strong>₹2,500</strong> distributes learning kits & tablets
                          </span>
                        </li>

                        <li className="mb-3 d-flex align-items-center text-white">
                          <i className="bi bi-check-circle-fill icon-orange me-3 fs-5"></i>
                          <span>
                            <strong>₹5,000</strong> sponsors a child's complete schooling
                          </span>
                        </li>

                      </ul>

                      <div className="why-donate-box mt-4 pt-4 border-top border-light border-opacity-25">

                        <h5 className="fw-bold text-white mb-3">
                          <i className="bi bi-shield-heart-fill me-2 icon-orange"></i>
                          Why Support CareBridge?
                        </h5>

                        <ul className="list-unstyled text-white small opacity-90 mb-3">

                          <li className="mb-2">
                            <i className="bi bi-check2-square me-2 icon-orange"></i>
                            100% Transparent & Accountable Fund Usage
                          </li>

                          <li className="mb-2">
                            <i className="bi bi-file-earmark-pdf-fill me-2 icon-orange"></i>
                            Instant Tax Receipt
                          </li>

                          <li className="mb-2">
                            <i className="bi bi-envelope-check-fill me-2 icon-orange"></i>
                            Regular Monthly Impact Reports
                          </li>

                          <li className="mb-2">
                            <i className="bi bi-award-fill me-2 icon-orange"></i>
                            NGO Support Programs
                          </li>

                        </ul>

                      </div>

                    </div>

                    <div className="trust-badges mt-4 pt-3 border-top border-light border-opacity-25 text-white">

                      <p className="small mb-2 text-white opacity-90">
                        <i className="bi bi-lock-fill me-1 icon-orange"></i>
                        Secure Donation Demo
                      </p>

                      <div className="d-flex gap-3 fs-3 text-white align-items-center">
                        <i className="bi bi-shield-check icon-orange"></i>
                        <i className="bi bi-credit-card-2-front icon-orange"></i>
                        <i className="bi bi-bank icon-orange"></i>
                      </div>

                    </div>

                  </div>

                  {/* RIGHT SIDE */}

                  <div className="col-md-7 p-5 bg-white">

                    <h3 className="fw-bold mb-4">
                      Make a Donation
                    </h3>

                    {/* DONATION TYPE */}

                    <div className="donation-type-toggle mb-4">

                      <button
                        type="button"
                        className={`btn-toggle ${
                          donationType === "monthly"
                            ? "active"
                            : ""
                        }`}
                        onClick={() => setDonationType("monthly")}
                      >
                        Give Monthly
                      </button>

                      <button
                        type="button"
                        className={`btn-toggle ${
                          donationType === "once"
                            ? "active"
                            : ""
                        }`}
                        onClick={() => setDonationType("once")}
                      >
                        Give Once
                      </button>

                    </div>

                    {/* AMOUNTS */}

                    <div className="preset-amounts mb-4">

                      {["500", "1000", "2500", "5000"].map((val) => (

                        <button
                          type="button"
                          key={val}
                          className={`btn-amount ${
                            amount === val ? "active" : ""
                          }`}
                          onClick={() => handleAmountClick(val)}
                        >
                          ₹{val}
                        </button>

                      ))}

                      <div className="custom-amount-wrapper mt-3">

                        <span className="currency-symbol">
                         
                        </span>

                        <input
                          type="number"
                          className={`form-control custom-amount-input ${
                            amount === "custom" ? "active" : ""
                          }`}
                          placeholder="Custom Amount"
                          value={customAmount}
                          onChange={handleCustomAmount}
                          min="1"
                        />

                      </div>

                    </div>

                    {/* DONOR FORM */}

                    <form
                      className="donor-form mb-5"
                      onSubmit={handleProceedToPay}
                    >

                      <div className="col-sm-12">

  <label className="form-label text-muted small fw-bold">
    Full Name
  </label>

  <input
    type="text"
    className="form-control"
    placeholder="Enter your full name"
    required
    onInput={(e) =>
      (e.target.value =
        e.target.value.replace(
          /[^a-zA-Z\s]/g,
          ""
        ))
    }
  />

</div>

                        <div className="col-sm-12">

                          <label className="form-label text-muted small fw-bold">
                            Email Address
                          </label>

                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />

                        </div>

                        <div className="col-sm-12">

                          <label className="form-label text-muted small fw-bold">
                            PAN Number
                          </label>

                          <input
                            type="text"
                            className="form-control text-uppercase"
                            placeholder="ABCDE1234F"
                            maxLength="10"
                          />

                        </div>

                      </div>

                      <button
                        type="submit"
                        className="btn btn-accent w-100 py-3 fw-bold fs-5 shadow-sm btn-donate-submit"
                      >
                        <i className="bi bi-lock-fill me-2"></i>
                        Proceed to Pay ₹
                        {getFinalAmount().toLocaleString("en-IN")}
                      </button>

                    </form>

                    {/* OTHER WAYS */}

                    <div className="offline-donations pt-4 border-top">

                      <h4 className="fw-bold mb-4 text-center">
                        Other Ways to Donate
                      </h4>

                      <div className="row g-4">

                        <div className="col-md-6">

                          <div className="p-3 bg-light rounded text-center h-100 border">

                            <h6 className="fw-bold text-accent mb-3">
                              <i className="bi bi-qr-code-scan me-2"></i>
                              Scan & Pay
                            </h6>

                            <div className="demo-small-qr">
                              <i className="bi bi-qr-code"></i>
                            </div>

                            <p className="small text-muted mb-0 fw-bold">
                              UPI Demo
                            </p>

                          </div>

                        </div>

                        <div className="col-md-6">

                          <div className="p-3 bg-light rounded h-100 border">

                            <h6 className="fw-bold text-accent mb-3 text-center">
                              <i className="bi bi-bank me-2"></i>
                              Bank Transfer
                            </h6>

                            <p className="small text-muted mb-1">
                              Bank details can be added here.
                            </p>

                            <p className="small text-muted mb-0">
                              Frontend demo only.
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}

export default Donate;
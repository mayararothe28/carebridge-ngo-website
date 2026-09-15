import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      

      <section className="contact-hero">
        <div className="container text-center">

          <p className="contact-small-title">
            GET IN TOUCH
          </p>

          <h1>We'd Love to Hear From You</h1>

          <p>
            Have a question, want to volunteer, or want to support our mission?
            Get in touch with the CareBridge team.
          </p>

        </div>
      </section>


    

      <section
        className="contact-form-section"
        id="contact-form"
      >
        <div className="container">

          <div className="row align-items-center g-5">

            

            <div className="col-lg-5">

              <p className="contact-form-title">
                SEND US A MESSAGE
              </p>

              <h2>
                Your Voice Can Make a Difference
              </h2>

              <p className="contact-form-text">
                Whether you have a question, want to join us as a volunteer,
                or would like to support our work, we are always happy to hear
                from you.
              </p>

              <div className="contact-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Ask us about our programs</span>
              </div>

              <div className="contact-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Learn about volunteering</span>
              </div>

              <div className="contact-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Support our community initiatives</span>
              </div>

            </div>


            

            <div className="col-lg-7">

              <div className="contact-form-card">

                {submitted ? (

                  <div className="contact-success">

                    <i className="bi bi-check-circle-fill"></i>

                    <h3>Thank You!</h3>

                    <p>
                      Your message has been submitted successfully.
                    </p>

                    <p>
                      Our team will get back to you soon.
                    </p>

                  </div>

                ) : (

                  <form onSubmit={handleSubmit}>

                    <div className="row">

                      <div className="col-md-6 mb-3">

                        <label>Full Name *</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your full name"
                          required
                        />

                      </div>


                      <div className="col-md-6 mb-3">

                        <label>Email Address *</label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          required
                        />

                      </div>


                      <div className="col-md-6 mb-3">

                        <label>Phone Number</label>

                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter phone number"
                          maxLength="10"
                          inputMode="numeric"
                          onInput={(e) => {
                            e.target.value = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                          }}
                        />

                      </div>


                      <div className="col-md-6 mb-3">

                        <label>Subject *</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter subject"
                          required
                        />

                      </div>


                      <div className="col-12 mb-4">

                        <label>Message *</label>

                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Write your message..."
                          required
                        ></textarea>

                      </div>

                    </div>


                    <button
                      type="submit"
                      className="contact-submit-btn"
                    >
                      Send Message
                      <i className="bi bi-arrow-right"></i>
                    </button>

                  </form>

                )}

              </div>

            </div>

          </div>

        </div>
      </section>



      <section className="why-contact-section">

        <div className="container">

          <div className="section-heading text-center">

            <p>HOW WE CAN HELP</p>

            <h2>Connect With Our Mission</h2>

          </div>


          <div className="row g-4">

           

            <div className="col-md-4">

              <div className="why-contact-card">

                <i className="bi bi-people-fill"></i>

                <h3>Become a Volunteer</h3>

                <p>
                  Share your time and skills to support our community
                  initiatives.
                </p>

                <Link to="/register">
                  Become a Volunteer
                </Link>

              </div>

            </div>


            

            <div className="col-md-4">

              <div className="why-contact-card">

                <i className="bi bi-heart-fill"></i>

                <h3>Support Our Mission</h3>

                <p>
                  Your contribution can help us create meaningful change
                  in people's lives.
                </p>

                <Link to="/donate">
                  Donate Now
                </Link>

              </div>

            </div>


            



<div className="col-md-4">

  <div className="why-contact-card">

    <i className="bi bi-chat-dots-fill"></i>

    <h3>Ask a Question</h3>

    <p>
      Have questions about our programs, campaigns or
      volunteering opportunities?
    </p>

    <form
      className="question-form"
      onSubmit={(e) => {
        e.preventDefault();

        const question = e.target.question.value.trim();

        if (question === "") {
          alert("Please enter your question.");
          return;
        }

        localStorage.setItem(
          "carebridgeQuestion",
          question
        );

        alert("Your question has been sent successfully!");

        e.target.reset();
      }}
    >

      <textarea
        name="question"
        className="question-input"
        placeholder="Type your question..."
        rows="4"
        required
      ></textarea>

      <button
        type="submit"
        className="question-send-btn"
      >
        Send Question
        <i className="bi bi-send-fill"></i>
      </button>

    </form>

  </div>

</div>

      </div>

        </div>

      </section>


    

      <section className="contact-faq-section">

        <div className="container">

          <div className="section-heading text-center">

            <p>FAQ</p>

            <h2>Frequently Asked Questions</h2>

          </div>


          <div
            className="accordion contact-accordion"
            id="contactFAQ"
          >

          

            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOne"
                >
                  How can I become a volunteer?
                </button>

              </h2>

              <div
                id="faqOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#contactFAQ"
              >

                <div className="accordion-body">

                  You can join us by completing our volunteer registration
                  form and selecting the area where you would like to help.

                </div>

              </div>

            </div>


           

            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqTwo"
                >
                  How can I donate?
                </button>

              </h2>

              <div
                id="faqTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#contactFAQ"
              >

                <div className="accordion-body">

                  You can visit our Donate page and choose the amount and
                  purpose of your contribution.

                </div>

              </div>

            </div>


           

            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqThree"
                >
                  Where does my donation go?
                </button>

              </h2>

              <div
                id="faqThree"
                className="accordion-collapse collapse"
                data-bs-parent="#contactFAQ"
              >

                <div className="accordion-body">

                  Donations support areas such as child education,
                  food support, healthcare and community initiatives.

                </div>

              </div>

            </div>


       

            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqFour"
                >
                  How can I participate in campaigns?
                </button>

              </h2>

              <div
                id="faqFour"
                className="accordion-collapse collapse"
                data-bs-parent="#contactFAQ"
              >

                <div className="accordion-body">

                  Visit our Campaigns page to learn about our current
                  initiatives and ways to support them.

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


     

      <section className="contact-cta">

        <div className="container text-center">

          <p>TOGETHER WE CAN</p>

          <h2>Make a Difference in Someone's Life</h2>

          <p>
            Your time, support and kindness can help us build stronger
            communities.
          </p>

          <div className="contact-cta-buttons">

            <Link
              to="/register"
              className="contact-volunteer-btn"
            >
              Become a Volunteer
            </Link>

            <Link
              to="/donate"
              className="contact-donate-btn"
            >
              Donate Now
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;
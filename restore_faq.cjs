const fs = require('fs');

const faqJSX = `
      {/* ================= FAQ ================= */}
      <section className="contact-faq-section py-5">
        <div className="container">
          <div className="text-center mb-5 fade-in">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion contact-accordion shadow-sm" id="contactFAQ">
                
                <div className="accordion-item fade-in stagger-1">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                      How can I become a volunteer?
                    </button>
                  </h2>
                  <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      You can join us by completing our volunteer registration form on the Volunteer page and selecting the area where you would like to help.
                    </div>
                  </div>
                </div>

                <div className="accordion-item fade-in stagger-2">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                      How can I donate?
                    </button>
                  </h2>
                  <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      You can visit our Donate page and choose the amount and purpose of your contribution. We accept multiple payment methods.
                    </div>
                  </div>
                </div>

                <div className="accordion-item fade-in stagger-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                      Where does my donation go?
                    </button>
                  </h2>
                  <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Donations support areas such as child education, food support, healthcare and community initiatives across Mumbai.
                    </div>
                  </div>
                </div>

                <div className="accordion-item fade-in stagger-4">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
                      How can I participate in campaigns?
                    </button>
                  </h2>
                  <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Visit our Campaigns page to learn about our current initiatives and ways to support them. You can sign up directly there.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
`;

// Insert FAQ at the end of Contact.jsx main tag
let jsx = fs.readFileSync('src/Pages/Contact.jsx', 'utf8');
jsx = jsx.replace('      </div>\n    </main>', '      </div>\n' + faqJSX + '\n    </main>');
fs.writeFileSync('src/Pages/Contact.jsx', jsx);

const faqCSS = `
/* ================================
   FAQ
================================ */
.contact-faq-section {
  background: #f8f9fa;
  margin-top: 40px;
}

.contact-accordion .accordion-item {
  border: none;
  margin-bottom: 15px;
  border-radius: var(--radius-md) !important;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.contact-accordion .accordion-button {
  padding: 20px 25px;
  font-weight: 700;
  color: var(--text-dark);
  background-color: white;
  box-shadow: none !important;
}

.contact-accordion .accordion-button:not(.collapsed) {
  color: var(--primary);
  background-color: white;
}

.contact-accordion .accordion-button::after {
  background-size: 1rem;
}

.contact-accordion .accordion-body {
  padding: 0 25px 25px;
  color: var(--text-muted);
  line-height: 1.7;
  background-color: white;
}
`;

fs.appendFileSync('src/Pages/Contact.css', '\n' + faqCSS);
console.log('Done FAQ!');

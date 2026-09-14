import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="about-hero-content">

                <p className="about-small-text">
                  ABOUT CAREBRIDGE NGO
                </p>

                <h1>
                  Building Hope.
                  <br />
                  Creating Change.
                </h1>

                <p className="about-hero-description">
                  CareBridge is a community-focused NGO working to support
                  children, families and communities through education,
                  food support, healthcare and meaningful volunteer
                  opportunities.
                </p>

                <div className="about-hero-buttons">
                  <a href="#mission" className="btn about-primary-btn">
                    Our Mission
                  </a>

                  <a href="#values" className="btn about-secondary-btn">
                    Our Values
                  </a>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1000&q=80"
                  alt="CareBridge volunteers supporting the community"
                  className="about-hero-image"
                />

                <div className="about-hero-badge">
                  <strong>Together</strong>
                  <span>We Make a Difference</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="about-introduction">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="about-introduction-image">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                  alt="Children supported through community initiatives"
                />

                <div className="about-image-card">
                  <span>CAREBRIDGE</span>
                  <strong>Care. Support. Change.</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-introduction-content">

                <p className="about-section-label">
                  WHO WE ARE
                </p>

                <h2>
                  Connecting People Who Care With Communities That Need Support
                </h2>

                <p>
                  CareBridge is a community-focused NGO committed to creating
                  better opportunities for children, families and communities.
                </p>

                <p>
                  We believe that meaningful change begins when people come
                  together with compassion, responsibility and a willingness
                  to help. Our work focuses on practical support that can
                  improve everyday lives and create opportunities for a better
                  future.
                </p>

                <p>
                  From education and food support to healthcare awareness and
                  volunteering, we bring people and resources together where
                  they can make a meaningful difference.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-story">
        <div className="container">

          <div className="section-heading about-page-heading">
            <p>OUR STORY</p>
            <h2>Why CareBridge Exists</h2>
            <span>
              We believe support becomes stronger when communities work
              together.
            </span>
          </div>

          <div className="row align-items-stretch">

            <div className="col-lg-4 mb-4">
              <div className="about-story-card">

                <div className="about-story-number">
                  01
                </div>

                <h3>See the Need</h3>

                <p>
                  Every community has different challenges. We listen,
                  understand local needs and focus on areas where support
                  can make a meaningful difference.
                </p>

              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="about-story-card">

                <div className="about-story-number">
                  02
                </div>

                <h3>Bring People Together</h3>

                <p>
                  Donors, volunteers and community members all have a role
                  to play. CareBridge connects people who want to help with
                  opportunities to contribute.
                </p>

              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="about-story-card">

                <div className="about-story-number">
                  03
                </div>

                <h3>Create Lasting Impact</h3>

                <p>
                  We focus on practical support and meaningful participation
                  so that small contributions can become positive changes in
                  people's lives.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-mission" id="mission">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">
              <div className="about-mission-heading">

                <p className="about-section-label">
                  OUR PURPOSE
                </p>

                <h2>
                  Our Mission & Vision
                </h2>

                <p>
                  Our purpose is to create opportunities, strengthen
                  communities and make support accessible to people who need
                  it most.
                </p>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">

                <div className="col-md-6 mb-4">
                  <div className="about-purpose-card">

                    <div className="about-purpose-icon">
                      M
                    </div>

                    <h3>Our Mission</h3>

                    <p>
                      To support children, families and communities through
                      education, food support, healthcare initiatives and
                      meaningful opportunities for participation.
                    </p>

                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="about-purpose-card">

                    <div className="about-purpose-icon">
                      V
                    </div>

                    <h3>Our Vision</h3>

                    <p>
                      To build an inclusive and caring society where people
                      have the opportunity to live with dignity, hope and
                      access to essential support.
                    </p>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-values" id="values">
        <div className="container">

          <div className="section-heading about-page-heading">
            <p>OUR VALUES</p>
            <h2>What Guides Our Work</h2>
            <span>
              Our values shape how we work with communities, volunteers and
              supporters.
            </span>
          </div>

          <div className="row">

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-value-card">

                <div className="about-value-number">
                  01
                </div>

                <h3>Compassion</h3>

                <p>
                  We approach every person and every community with care,
                  respect and understanding.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-value-card">

                <div className="about-value-number">
                  02
                </div>

                <h3>Transparency</h3>

                <p>
                  We believe responsible communication and accountability are
                  essential to building trust.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-value-card">

                <div className="about-value-number">
                  03
                </div>

                <h3>Equality</h3>

                <p>
                  Everyone deserves dignity, opportunity and access to
                  support regardless of their circumstances.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-value-card">

                <div className="about-value-number">
                  04
                </div>

                <h3>Teamwork</h3>

                <p>
                  We believe lasting change becomes possible when people work
                  together toward a common purpose.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-focus">
        <div className="container">

          <div className="section-heading about-page-heading">
            <p>OUR AREAS OF WORK</p>
            <h2>Where We Focus Our Efforts</h2>
            <span>
              We work across key areas that can improve everyday life and
              create better opportunities.
            </span>
          </div>

          <div className="row">

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-focus-card">

                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                  alt="Child education"
                />

                <div className="about-focus-content">

                  <h3>Child Education</h3>

                  <p>
                    Supporting children with learning resources,
                    educational opportunities and encouragement.
                  </p>

                  <a href="/#work">
                    Learn More
                  </a>

                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-focus-card">

                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Food support"
                />

                <div className="about-focus-content">

                  <h3>Food Support</h3>

                  <p>
                    Providing essential food support and helping families
                    facing difficult circumstances.
                  </p>

                  <a href="/#work">
                    Learn More
                  </a>

                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-focus-card">

                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare support"
                />

                <div className="about-focus-content">

                  <h3>Healthcare</h3>

                  <p>
                    Supporting healthcare awareness, assistance and access
                    to essential community support.
                  </p>

                  <a href="/#work">
                    Learn More
                  </a>

                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-focus-card">

                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
                  alt="Community volunteers"
                />

                <div className="about-focus-content">

                  <h3>Volunteering</h3>

                  <p>
                    Creating opportunities for people to contribute their
                    time, skills and energy to the community.
                  </p>

                  <a href="/#volunteer">
                    Join Us
                  </a>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-impact">
        <div className="container">

          <div className="section-heading about-page-heading">
            <p>OUR IMPACT</p>
            <h2>Making a Difference Together</h2>
            <span>
              Every contribution helps us continue supporting people and
              communities.
            </span>
          </div>

          <div className="row">

            <div className="col-6 col-lg-3 mb-4">
              <div className="about-impact-card">
                <h3>500+</h3>
                <p>Children Educated</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mb-4">
              <div className="about-impact-card">
                <h3>10K+</h3>
                <p>Meals Provided</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mb-4">
              <div className="about-impact-card">
                <h3>2K+</h3>
                <p>Healthcare Support</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mb-4">
              <div className="about-impact-card">
                <h3>300+</h3>
                <p>Active Volunteers</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-approach">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="about-approach-content">

                <p className="about-section-label">
                  OUR APPROACH
                </p>

                <h2>
                  Simple Actions. Responsible Support. Real Change.
                </h2>

                <p>
                  We believe effective community work starts with listening
                  to people and understanding their needs.
                </p>

                <div className="about-approach-list">

                  <div className="about-approach-item">
                    <span>01</span>
                    <div>
                      <h3>Understand</h3>
                      <p>
                        We focus on real community needs and identify where
                        support can be most useful.
                      </p>
                    </div>
                  </div>

                  <div className="about-approach-item">
                    <span>02</span>
                    <div>
                      <h3>Collaborate</h3>
                      <p>
                        We bring volunteers, supporters and communities
                        together to take meaningful action.
                      </p>
                    </div>
                  </div>

                  <div className="about-approach-item">
                    <span>03</span>
                    <div>
                      <h3>Support</h3>
                      <p>
                        We provide practical support through our education,
                        food, healthcare and volunteer initiatives.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-approach-image">

                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80"
                  alt="Volunteers working together"
                />

                <div className="about-approach-quote">
                  Together, small actions can create meaningful change.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-trust">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">
              <p className="about-section-label">
                WHY CAREBRIDGE
              </p>

              <h2>
                Support That Starts With People
              </h2>

              <p>
                We believe trust is built through responsible action,
                community participation and a clear commitment to the people
                we serve.
              </p>

            </div>

            <div className="col-lg-5">
              <div className="about-trust-points">

                <div>
                  <strong>Community Focused</strong>
                  <span>
                    Our initiatives are designed around real community needs.
                  </span>
                </div>

                <div>
                  <strong>Volunteer Driven</strong>
                  <span>
                    People are at the heart of every effort we make.
                  </span>
                </div>

                <div>
                  <strong>Responsible</strong>
                  <span>
                    We value transparency, accountability and meaningful
                    support.
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="about-cta">
        <div className="container">

          <div className="about-cta-content">

            <p>
              BE PART OF THE CHANGE
            </p>

            <h2>
              Together We Can Make a Difference
            </h2>

            <span>
              Donate your resources, volunteer your time or help spread the
              word. Every contribution matters.
            </span>

 
<div className="about-cta-buttons">
  <Link to="/donate" className="about-donate-text">
    Donate Now
  </Link>

  <Link to="/register" className="about-volunteer-text">
    Become a Volunteer
  </Link>
</div>





          </div>

        </div>
      </section>

    </main>
  );
}

export default About;
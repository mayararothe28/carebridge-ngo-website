import { useEffect, useState } from "react";
import "./Home.css";
import { getCampaigns } from "../Services/Api";
import { Link } from "react-router-dom";

function Home() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        setCampaigns(data.slice(0, 3));
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>

    
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <p className="hero-small-text">CAREBRIDGE NGO</p>

              <h1>
                Together We Care.
                <br />
                Together We Change.
              </h1>

              <p className="hero-description">
                We work together to support children, families and
                communities through education, food, healthcare and
                meaningful volunteer activities.
              </p><br></br>

              <div className="hero-buttons">
                <Link to="/donate" className="btn donate-main-btn">
  Donate Now
</Link>
             <Link to="/register" className="btn volunteer-btn">
  Become a Volunteer
</Link>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                alt="Children supported by NGO"
                className="hero-image"
              />
            </div>

          </div>
        </div>
      </section>


      
      <section className="impact-section">
        <div className="container">

          <div className="section-heading">
            <p>OUR IMPACT</p>
            <h2>Making a Difference Together</h2>
          </div>

          <div className="row">

            <div className="col-md-3">
              <div className="impact-card">
                <h3>500+</h3>
                <p>Children Educated</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="impact-card">
                <h3>10K+</h3>
                <p>Meals Provided</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="impact-card">
                <h3>2K+</h3>
                <p>Healthcare Support</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="impact-card">
                <h3>300+</h3>
                <p>Active Volunteers</p>
              </div>
            </div>

          </div>
        </div>
      </section>


     
      <section className="about-section" id="about">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80"
                alt="CareBridge volunteers"
                className="about-image"
              />
            </div>

            <div className="col-lg-6">
              <p className="section-label">ABOUT CAREBRIDGE</p>

              <h2>
                Building a Better Future for Everyone
              </h2>

              <p>
                CareBridge is a community-focused NGO working to create
                better opportunities for children and families.
              </p>

              <p>
                Our mission is to connect people who want to help with
                communities that need support.
              </p>

              <a href="#work" className="learn-more-btn">
                Learn More
              </a>
            </div>

          </div>

        </div>
      </section>


     
<section className="work-section" id="work">
  <div className="container">

    <div className="section-heading">
      <p>OUR WORK</p>
      <h2>Where Your Support Goes</h2>
    </div>

    <div className="row">

      
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="work-card">

          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
            alt="Child Education"
            className="work-image"
          />

          <div className="work-content">
            <h3>Child Education</h3>
            <p>
              We support children with books, learning materials and
              educational opportunities.
            </p>
          </div>

        </div>
      </div>


     
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="work-card">

          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
            alt="Food Support"
            className="work-image"
          />

          <div className="work-content">
            <h3>Food Support</h3>
            <p>
              We provide nutritious meals and essential food support
              to families and children.
            </p>
          </div>

        </div>
      </div>


    
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="work-card">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
            alt="Healthcare Support"
            className="work-image"
          />

          <div className="work-content">
            <h3>Healthcare</h3>
            <p>
              We connect communities with healthcare support,
              medical assistance and awareness.
            </p>
          </div>

        </div>
      </div>


    
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="work-card">

          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
            alt="Volunteer"
            className="work-image"
          />

          <div className="work-content">
            <h3>Volunteer</h3>
            <p>
              Join our volunteers and help us create meaningful
              change in the community.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>




<section className="difference-section" id="difference">
  <div className="container">

    <div className="section-heading">
      <p>SIMPLE ACTIONS, REAL CHANGE</p>
      <h2>Small Steps Can Make a Big Difference</h2>
    </div>

    <div className="row">

    
      <div className="col-md-4 mb-4">
        <div className="difference-card">

          <img
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
            alt="Children and community"
            className="difference-image"
          />

          <div className="difference-content">
            <h3>Identify Needs</h3>

            <p>
              We understand the needs of children, families and
              communities to provide the right support.
            </p>
          </div>

        </div>
      </div>

      
      <div className="col-md-4 mb-4">
        <div className="difference-card">

          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
            alt="Volunteer helping community"
            className="difference-image"
          />

          <div className="difference-content">
            <h3>Take Action</h3>

            <p>
              Volunteers and supporters come together to provide
              education, food, healthcare and essential help.
            </p>
          </div>

        </div>
      </div>

      
      <div className="col-md-4 mb-4">
        <div className="difference-card">

          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
            alt="Happy children"
            className="difference-image"
          />

          <div className="difference-content">
            <h3>Create Impact</h3>

            <p>
              Every small contribution creates positive and lasting
              change in the lives of people who need support.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>




<section className="campaign-section" id="campaigns">
  <div className="container">

    <div className="section-heading">
      <p>FEATURED CAMPAIGNS</p>
      <h2>Support a Cause</h2>
    </div>

    {loading ? (
      <p className="text-center">Loading campaigns...</p>
    ) : (
      <div className="row">

        {campaigns.map((campaign, index) => {

          const campaignImages = [
            "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
          ];

          return (
            <div className="col-md-4" key={campaign.id}>

              <div className="campaign-card">

                <img
                  src={campaignImages[index]}
                  alt="CareBridge Campaign"
                  className="campaign-image"
                />

                <div className="campaign-content">

                  <h3>
                    {campaign.title}
                  </h3>

                  <p>
                    {campaign.body}
                  </p>

                  <Link to="/donate" className="support-campaign-btn">
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


      
      <section className="why-section">
        <div className="container">

          <div className="section-heading">
            <p>WHY CAREBRIDGE?</p>
            <h2>Why Your Support Matters</h2>
          </div>

          <div className="row">

            <div className="col-md-4">
              <div className="why-card">
                <h3>Transparent</h3>
                <p>
                  We believe in responsible and transparent use of
                  resources.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="why-card">
                <h3>Community Focused</h3>
                <p>
                  Our work focuses on real community needs and
                  meaningful support.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="why-card">
                <h3>Together We Grow</h3>
                <p>
                  Every volunteer, donor and supporter helps us create
                  greater impact.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


    
      <section className="stories-section">
        <div className="container">

          <div className="section-heading">
            <p>SUCCESS STORIES</p>
            <h2>Small Support. Big Dreams.</h2>
          </div>

          <div className="row">

            <div className="col-md-4">
              <div className="story-card">
                <p>
                  “With educational support, I got the opportunity to
                  continue my studies and dream bigger.”
                </p>
                <h4>— Aisha</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="story-card">
                <p>
                  “The food support helped our family during a difficult
                  time.”
                </p>
                <h4>— Rahul's Family</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="story-card">
                <p>
                  “Volunteering gave me a chance to use my time to help
                  others.”
                </p>
                <h4>— Priya</h4>
              </div>
            </div>

          </div>

        </div>
      </section>


<section className="events-section" id="events">
  <div className="container">

    <div className="section-heading">
      <p>UPCOMING EVENTS</p>
      <h2>Join Us in Making a Difference</h2>
    </div>

    <div className="row">

  
      <div className="col-md-4 mb-4">
        <div className="event-card">

          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
            alt="Community Food Drive"
            className="event-image"
          />

          <div className="event-content">
            <h3>Community Food Drive</h3>

            <p>
              Join us in distributing nutritious food to
              families and children in need.
            </p>

            <span>15 October 2026</span>
          </div>

        </div>
      </div>


      
      <div className="col-md-4 mb-4">
        <div className="event-card">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
            alt="Education Workshop"
            className="event-image"
          />

          <div className="event-content">
            <h3>Education Workshop</h3>

            <p>
              Help children learn through creative and
              engaging educational activities.
            </p>

            <span>22 October 2026</span>
          </div>

        </div>
      </div>


      
      <div className="col-md-4 mb-4">
        <div className="event-card">

          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
            alt="Health Awareness Camp"
            className="event-image"
          />

          <div className="event-content">
            <h3>Health Awareness Camp</h3>

            <p>
              Support our healthcare awareness and
              community health initiative.
            </p>

            <span>30 October 2026</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


      
      <section className="cta-section" id="volunteer">
        <div className="container">

          <div className="cta-content">

            <p>BE PART OF THE CHANGE</p>

            <h2>
              Your Small Step Can Create a Big Difference
            </h2>

            <p>
              Donate your resources, volunteer your time or simply
              spread the word. Together, we can build a better future.
            </p>

            <div className="cta-buttons">

              <Link to="/donate" className="btn cta-donate-btn">
  Donate Now
</Link>

             <Link to="/register" className="btn cta-volunteer-btn">
  Become a Volunteer
</Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
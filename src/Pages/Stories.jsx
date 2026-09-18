import "./Stories.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

function Stories() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    stories: useScrollAnimation(),
  };

  const successStories = [
    {
      id: 1,
      name: "Asha's Journey to Fluency",
      subtitle: "How free English speaking classes opened new doors",
      story: "Asha, a 14-year-old from a rural village, always dreamed of working in aviation but struggled with English. Through CareBridge's newly implemented English Speaking & Skills Training initiative, she received free weekly tutoring. Today, she speaks fluently and has secured a scholarship for higher education.",
      img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "The Rao Family Farm",
      subtitle: "Sustainable livelihood through organic farming",
      story: "For years, the Rao family struggled with poor crop yields. CareBridge's Community Development team stepped in to provide training on organic farming techniques and proper irrigation. Within two seasons, their crop yield tripled, bringing them out of debt and poverty.",
      img: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Little Rahul's Recovery",
      subtitle: "Overcoming severe malnutrition",
      story: "At 3 years old, Rahul was severely malnourished. His parents couldn't afford proper healthcare or food. Through our 'Food for Every Family' campaign, Rahul's family received monthly nutrition kits and free pediatric care. He is now a healthy, energetic 5-year-old starting school.",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="stories-page">
      <section className="stories-hero fade-in" ref={sectionRefs.hero}>
        <div className="container text-center">
          <span className="section-label">Stories of Change</span>
          <h1>Real Impact, Real Lives</h1>
          <p>
            Behind every statistic is a human story. Read how your support through 
            CareBridge is transforming lives across the country.
          </p>
        </div>
      </section>

      <section className="stories-list-section" ref={sectionRefs.stories}>
        <div className="container">
          {successStories.map((story, index) => (
            <div className={`story-card fade-in stagger-${index + 1}`} key={story.id}>
              <div className="row g-0 align-items-center">
                <div className={`col-md-5 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                  <div className="story-img">
                    <img src={story.img} alt={story.name} />
                  </div>
                </div>
                <div className={`col-md-7 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                  <div className="story-content">
                    <i className="bi bi-quote quote-icon"></i>
                    <h2>{story.name}</h2>
                    <span className="story-subtitle">{story.subtitle}</span>
                    <p>{story.story}</p>
                    <Link to="/#donate" className="btn-story-support">
                      Support More Stories Like This
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Stories;

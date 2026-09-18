import "./Events.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Events() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    events: useScrollAnimation(),
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Free Education Camp",
      date: "Oct 15, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Zilla Parishad School, Rural Mumbai",
      desc: "A day-long camp providing foundational English speaking skills, reading materials, and interactive learning sessions for children.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "Nov 02, 2026",
      time: "12:00 PM - 3:00 PM",
      location: "Community Center, Mumbai",
      desc: "Distributing nutritious meals and raw food materials to over 500 families in need. Volunteers are welcome to join the distribution.",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Women's Skill & Development Workshop",
      date: "Nov 20, 2026",
      time: "11:00 AM - 5:00 PM",
      location: "CareBridge Main Hall, Mumbai",
      desc: "Teaching practical skills like tailoring, handicrafts, and basic financial literacy to help women become financially independent.",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="events-page">
      <section className="events-hero fade-in" ref={sectionRefs.hero}>
        <div className="container text-center">
          <span className="section-label">Join Our Initiatives</span>
          <h1>Upcoming Events</h1>
          <p>
            Participate in our events to make a direct impact. From free education camps 
            to community food drives, your presence makes a difference.
          </p>
        </div>
      </section>

      <section className="events-list-section" ref={sectionRefs.events}>
        <div className="container">
          <div className="row">
            {upcomingEvents.map((event, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={event.id}>
                <div className={`event-card fade-in stagger-${index + 1}`}>
                  <div className="event-img">
                    <img src={event.img} alt={event.title} />
                    <div className="event-date-badge">
                      <span>{event.date.split(" ")[0]}</span>
                      <strong>{event.date.split(" ")[1].replace(",", "")}</strong>
                    </div>
                  </div>
                  <div className="event-body">
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      <span><i className="bi bi-clock"></i> {event.time}</span>
                      <span><i className="bi bi-geo-alt"></i> {event.location}</span>
                    </div>
                    <p>{event.desc}</p>
                    <a href="/register" className="btn-event-join">
                      Register as Volunteer <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Events;

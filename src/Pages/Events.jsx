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
      title: "Community Food Drive",
      date: "Oct 15, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Mumbai",
      desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",
      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Education Workshop",
      date: "Oct 22, 2026",
      time: "11:00 AM - 3:00 PM",
      location: "Zilla Parishad School, Mumbai",
      desc: "Help children learn through creative and engaging educational activities in local communities.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Health Awareness Camp",
      date: "Oct 30, 2026",
      time: "09:00 AM - 5:00 PM",
      location: "CareBridge Main Hall, Mumbai",
      desc: "Free health checkups and awareness sessions for communities in partnership with local hospitals.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
                    <a href="/volunteer" className="btn-event-join">
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


import { Link } from "react-router-dom";
import "./Events.css";

function Events() {
  const upcomingEvents = [
    {
      date: "20",
      month: "SEP",
      title: "Education Awareness Drive",
      location: "Community Hall, Pune",
      description:
        "An awareness program focused on the importance of education and helping children build a better future.",
      icon: "bi-book",
    },
    {
      date: "28",
      month: "SEP",
      title: "Free Health Check-up Camp",
      location: "Community Centre, Mumbai",
      description:
        "A free health check-up camp providing basic health support and awareness to community members.",
      icon: "bi-heart-pulse",
    },
    {
      date: "05",
      month: "OCT",
      title: "Community Food Distribution",
      location: "Central Community Area",
      description:
        "Join us in distributing nutritious food to families and individuals who need support.",
      icon: "bi-egg-fried",
    },
  ];

  const pastEvents = [
    {
      title: "Back to School Drive",
      date: "August 2026",
      result: "150+ children received educational supplies.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Community Health Camp",
      date: "July 2026",
      result: "250+ people received basic health check-ups.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Food Support Initiative",
      date: "June 2026",
      result: "500+ meals were distributed to families.",
      image:
        "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="events-page">

      {/* HERO */}
      <section className="events-hero">
        <div className="container">
          <p className="events-label">EVENTS</p>

          <h1>Together, We Create Change</h1>

          <p className="events-hero-text">
            Join CareBridge events, meet people who care and take part
            in meaningful activities that create positive change.
          </p>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="upcoming-events-section">
        <div className="container">

          <div className="events-heading">
            <p>UPCOMING EVENTS</p>
            <h2>Be Part of Something Meaningful</h2>
            <span>
              Participate in our upcoming events and help us create
              stronger and healthier communities.
            </span>
          </div>

          <div className="row g-4 mt-4">

            {upcomingEvents.map((event, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className="event-card">

                  <div className="event-date">
                    <strong>{event.date}</strong>
                    <span>{event.month}</span>
                  </div>

                  <div className="event-icon">
                    <i className={`bi ${event.icon}`}></i>
                  </div>

                  <div className="event-card-content">

                    <h3>{event.title}</h3>

                    <p className="event-location">
                      <i className="bi bi-geo-alt"></i>
                      {event.location}
                    </p>

                    <p className="event-description">
                      {event.description}
                    </p>

                    <Link to="/register" className="event-join-btn">
                      Join Event
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="event-activities-section">
        <div className="container">

          <div className="events-heading">
            <p>OUR ACTIVITIES</p>
            <h2>What Happens at Our Events?</h2>
            <span>
              Every event is designed to bring people together and
              turn small actions into meaningful impact.
            </span>
          </div>

          <div className="row g-4 mt-4">

            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <i className="bi bi-book activity-icon"></i>
                <h4>Education Drives</h4>
                <p>
                  Support children through educational activities,
                  awareness programs and learning resources.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <i className="bi bi-heart-pulse activity-icon"></i>
                <h4>Health Camps</h4>
                <p>
                  Promote health awareness and provide basic support
                  through community health activities.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <i className="bi bi-basket2 activity-icon"></i>
                <h4>Food Support</h4>
                <p>
                  Help provide nutritious meals and food support to
                  families and communities.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <i className="bi bi-people activity-icon"></i>
                <h4>Community Work</h4>
                <p>
                  Work together with volunteers to create cleaner,
                  stronger and more connected communities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="past-events-section">
        <div className="container">

          <div className="events-heading">
            <p>PAST EVENTS</p>
            <h2>Our Recent Impact</h2>
            <span>
              Here are some of the activities where our volunteers
              and supporters came together to make a difference.
            </span>
          </div>

          <div className="row g-4 mt-4">

            {pastEvents.map((event, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className="past-event-card">

                  <img
                    src={event.image}
                    alt={event.title}
                  />

                  <div className="past-event-content">

                    <p className="past-event-date">
                      <i className="bi bi-calendar3"></i>
                      {event.date}
                    </p>

                    <h3>{event.title}</h3>

                    <p>{event.result}</p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW YOU CAN PARTICIPATE */}
      <section className="participate-section">
        <div className="container">

          <div className="events-heading">
            <p>GET INVOLVED</p>
            <h2>How You Can Participate</h2>
          </div>

          <div className="row g-4 mt-4">

            <div className="col-lg-4">
              <div className="participate-card">
                <i className="bi bi-calendar-check"></i>
                <h3>Attend an Event</h3>
                <p>
                  Join one of our events and become part of a
                  community working for positive change.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="participate-card">
                <i className="bi bi-person-heart"></i>
                <h3>Volunteer</h3>
                <p>
                  Give your time and skills to support our programs
                  and community activities.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="participate-card">
                <i className="bi bi-megaphone"></i>
                <h3>Spread Awareness</h3>
                <p>
                  Share our mission with your friends and family
                  and encourage others to get involved.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="events-cta">
        <div className="container">

          <div className="events-cta-content">

            <p>BE PART OF THE CHANGE</p>

            <h2>Together We Can Make a Difference</h2>

            <span>
              Donate your resources, volunteer your time or help
              spread the word. Every contribution matters.
            </span>

            <div className="events-cta-buttons">

              <Link to="/donate" className="cta-donate-btn">
                Donate Now
              </Link>

              <Link to="/register" className="cta-volunteer-btn">
                Become a Volunteer
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Events;


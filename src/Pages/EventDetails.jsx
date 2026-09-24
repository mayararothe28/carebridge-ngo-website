import { useParams, Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function EventDetails() {
  const { id } = useParams();
  const sectionRef = useScrollAnimation();

  const eventsList = {
    "1": {
      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
      title: "Community Food Drive",
      date: "Oct 15, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Mumbai",
      desc: "Join us in distributing nutritious food to families and children in need across Mumbai district.",
      fullDescription: [
        "This event is a great opportunity to get involved and contribute to our ongoing efforts in Mumbai.",
        "We will be organizing various activities including distribution drives, interactive sessions, and awareness campaigns.",
        "Volunteers are the backbone of this event, and we welcome everyone to participate and bring a smile to someone's face."
      ]
    },
    "2": {
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      title: "Education Workshop",
      date: "Oct 22, 2026",
      time: "11:00 AM - 3:00 PM",
      location: "Community Center, Mumbai",
      desc: "Help children learn through creative and engaging educational activities in local communities.",
      fullDescription: [
        "Education is the key to a better future. Join our workshop to teach basic skills to underprivileged children.",
        "We have planned interactive learning games and art sessions to make learning fun.",
        "Your presence and guidance will inspire these children to dream big."
      ]
    },
    "3": {
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      title: "Health Awareness Camp",
      date: "Oct 30, 2026",
      time: "09:00 AM - 5:00 PM",
      location: "Community Center, Mumbai",
      desc: "Free health checkups and awareness sessions for communities in partnership with local hospitals.",
      fullDescription: [
        "Health is wealth. Our camp aims to provide basic health screening for those who cannot afford it.",
        "Doctors and nurses will be volunteering their time to check for common illnesses.",
        "We also need non-medical volunteers to help organize the queues and distribute medicines."
      ]
    }
  };

  const eventData = eventsList[id] || eventsList["1"];

  return (
    <main className="campaign-details-page bg-light" ref={sectionRef} style={{ paddingBottom: '80px' }}>
      <section className="cd-header fade-in bg-white shadow-sm pb-5 pt-5 mb-5">
        <div className="container">
          <Link to="/events" className="text-decoration-none text-muted mb-4 d-inline-block">
            <i className="bi bi-arrow-left"></i> Back to Events
          </Link>
          <div className="cd-header-content">
            <span className="badge bg-accent px-3 py-2 rounded-pill mb-3">Event</span>
            <h1 className="display-4 fw-bold text-dark">{eventData.title}</h1>
            <div className="d-flex flex-wrap gap-4 mt-4 text-muted">
              <span className="fs-5"><i className="bi bi-calendar3 me-2 text-accent"></i> {eventData.date}</span>
              <span className="fs-5"><i className="bi bi-clock me-2 text-accent"></i> {eventData.time}</span>
              <span className="fs-5"><i className="bi bi-geo-alt me-2 text-accent"></i> {eventData.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cd-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 fade-in-left">
              <div className="cd-image mb-5 rounded-4 overflow-hidden shadow-sm">
                <img src={eventData.img} alt={eventData.title} className="img-fluid w-100" style={{maxHeight: '500px', objectFit: 'cover'}} />
              </div>
              <div className="cd-description bg-white p-5 rounded-4 shadow-sm">
                <h2 className="fw-bold mb-4">About the Event</h2>
                <p className="lead text-muted mb-4">{eventData.desc}</p>
                {eventData.fullDescription.map((p, i) => (
                  <p key={i} className="text-muted" style={{lineHeight: '1.8'}}>{p}</p>
                ))}
              </div>
            </div>

            <div className="col-lg-4 fade-in-right">
              <div className="bg-white p-4 rounded-4 shadow-sm sticky-top" style={{ top: '100px' }}>
                <h3 className="fw-bold mb-4">Join This Event</h3>
                <p className="text-muted mb-4">We need enthusiastic volunteers to make this event a success. Sign up today!</p>
                <Link to="/volunteer" className="btn btn-accent w-100 py-3 fw-bold fs-5 shadow-sm rounded-pill d-block text-center text-decoration-none">
                  Register as Volunteer <i className="bi bi-person-plus-fill ms-2"></i>
                </Link>
                <hr className="my-4" />
                <p className="text-center text-muted small mb-0">Have questions? <Link to="/contact" className="text-accent text-decoration-none fw-bold">Contact us</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventDetails;

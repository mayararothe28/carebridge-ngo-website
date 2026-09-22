import { useParams, Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function WorkDetails() {
  const { id } = useParams();
  const sectionRef = useScrollAnimation();

  const workData = {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    title: "Our Impact & Work",
    desc: "Discover how we are making a difference in the lives of thousands of people across Mumbai through our dedicated initiatives.",
    fullDescription: [
      "Our work focuses on the most critical areas that require immediate and sustained attention. We believe in creating long-term solutions.",
      "Through partnerships with local communities, we ensure that our interventions are culturally sensitive and highly effective.",
      "Every contribution, whether time or resources, goes directly into expanding these programs and reaching more families in need."
    ]
  };

  return (
    <main className="campaign-details-page bg-light" ref={sectionRef} style={{ paddingBottom: '80px' }}>
      <section className="cd-header fade-in bg-white shadow-sm pb-5 pt-5 mb-5">
        <div className="container text-center">
          <Link to="/work" className="text-decoration-none text-muted mb-4 d-inline-block">
            <i className="bi bi-arrow-left"></i> Back to Our Work
          </Link>
          <div className="cd-header-content">
            <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Initiative</span>
            <h1 className="display-4 fw-bold text-dark">{workData.title}</h1>
          </div>
        </div>
      </section>

      <section className="cd-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 mb-5 fade-in">
              <div className="cd-image mb-5 rounded-4 overflow-hidden shadow-sm">
                <img src={workData.img} alt={workData.title} className="img-fluid w-100" style={{maxHeight: '500px', objectFit: 'cover'}} />
              </div>
              <div className="cd-description bg-white p-5 rounded-4 shadow-sm">
                <h2 className="fw-bold mb-4">About this Initiative</h2>
                <p className="lead text-muted mb-4">{workData.desc}</p>
                {workData.fullDescription.map((p, i) => (
                  <p key={i} className="text-muted" style={{lineHeight: '1.8', fontSize: '1.1rem'}}>{p}</p>
                ))}
                
                <div className="text-center mt-5">
                  <Link to="/donate" className="btn btn-accent px-5 py-3 fw-bold fs-5 shadow-sm rounded-pill text-decoration-none d-inline-block me-3">
                    Support this Cause <i className="bi bi-heart-fill ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkDetails;

import { useParams, Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function WorkDetails() {
  const { id } = useParams();
  const sectionRef = useScrollAnimation();

  const workList = {
    "education": {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      title: "Child Education",
      desc: "Books, learning materials, school supplies, and tutoring support for children who need it most.",
      fullDescription: [
        "Education is the most powerful weapon which you can use to change the world.",
        "Our Child Education initiative focuses on providing quality learning materials, books, and uniforms to students in rural and underserved areas.",
        "We also partner with local teachers to provide after-school tutoring for struggling students."
      ]
    },
    "food": {
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      title: "Food Support",
      desc: "Nutritious meals and essential food packages for families facing difficult circumstances.",
      fullDescription: [
        "No one should go to bed hungry. Our food support program distributes weekly grocery kits to vulnerable families.",
        "We also run community kitchens in urban slums to provide hot, nutritious meals to daily wage workers and children.",
        "During festivals, we organize special meal drives to ensure everyone can celebrate without worry."
      ]
    },
    "health": {
      img: "https://images.unsplash.com/photo-1576091160550-2173eca0237e?auto=format&fit=crop&w=1200&q=80",
      title: "Healthcare",
      desc: "Medical assistance, health awareness camps, and access to essential healthcare services.",
      fullDescription: [
        "Access to healthcare is a basic human right. We organize monthly free medical camps in remote villages.",
        "Our camps provide general check-ups, eye exams, and distribute basic medicines.",
        "We also fund critical surgeries and medical treatments for children from low-income families."
      ]
    },
    "community": {
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
      title: "Volunteering",
      desc: "Opportunities to contribute your time, skills and energy to create meaningful change.",
      fullDescription: [
        "Volunteers are the heart and soul of CareBridge. We offer various volunteering programs tailored to your skills.",
        "Whether it's teaching on weekends, helping with social media, or participating in food drives, your time matters.",
        "Join our community of over 500 active volunteers and make a real difference in Mumbai."
      ]
    }
  };

  const workData = workList[id] || workList["education"];

  return (
    <main className="campaign-details-page bg-light" ref={sectionRef} style={{ paddingBottom: '80px' }}>
      <section className="cd-header fade-in bg-white shadow-sm pb-5 pt-5 mb-5">
        <div className="container text-center">
          <Link to="/work" className="text-decoration-none text-muted mb-4 d-inline-block">
            <i className="bi bi-arrow-left"></i> Back to Our Work
          </Link>
          <div className="cd-header-content">
            <span className="badge bg-accent px-3 py-2 rounded-pill mb-3">Initiative</span>
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

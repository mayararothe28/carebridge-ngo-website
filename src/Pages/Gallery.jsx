import { useState } from "react";
import "./Gallery.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const sectionRef = useScrollAnimation();

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Building Brighter Futures",
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "Together We Can Make a Difference",
    },
    {
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
      category: "Community",
      title: "Serving Our Community",
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
      category: "Children",
      title: "Every Child Deserves a Chance",
    },
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=85",
      category: "Food Support",
      title: "Sharing Food, Sharing Hope",
    },
    {
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=85",
      category: "Healthcare",
      title: "Care For Every Community",
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
      category: "Community",
      title: "Empowering Women",
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
      category: "Children",
      title: "Nurturing Young Minds",
    },
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "Small Actions, Big Impact",
    },
    {
      image: "https://images.unsplash.com/photo-1542810634-71277d95dc8c?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "People Who Care",
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Learning Without Limits",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      category: "Healthcare",
      title: "Growing a Greener Future",
    },
  ];

  const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main className="gallery-page" ref={sectionRef}>
    
      <section className="gallery-hero">
        <div className="container">
          <div className="fade-in">
            <span className="gallery-label">Our Gallery</span>
            <h1>Moments That Matter</h1>
            <p>
              Every picture tells a story of compassion, teamwork and positive
              change. Explore the moments that define CareBridge.
            </p>
          </div>
        </div>
      </section>

     
      <section className="gallery-grid-section">
        <div className="container">
          
          <div className="gallery-top fade-in">
            <div className="gallery-top-text">
              <span className="section-label">CareBridge in Action</span>
              <h2>Making A Difference Together</h2>
            </div>

            <div className="gallery-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

         
          <div className="row g-4">
            {filteredItems.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className="gallery-item fade-in"
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-cat">{item.category}</span>
                    <h3>{item.title}</h3>
                    <i className="bi bi-arrows-fullscreen gallery-expand"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

     
      <section className="gallery-cta">
        <div className="container">
          <div className="gallery-cta-box fade-in">
            <span>Be Part of the Journey</span>
            <h2>Every helping hand creates a better tomorrow.</h2>
            <Link to="/volunteer" className="gallery-cta-btn text-decoration-none">
              <i className="bi bi-people-fill"></i> Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} />
            <div className="lightbox-info">
              <span>{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
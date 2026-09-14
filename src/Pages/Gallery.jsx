import "./Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Building Brighter Futures"
    },
    {
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85",
      category: "Volunteers",
      title: "Together We Can Make a Difference"
    },
    {
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=85",
      category: "Community",
      title: "Serving Our Community"
    },
    {
      image:
        "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85",
      category: "Children",
      title: "Every Child Deserves a Chance"
    },
    {
      image:
        "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&q=85",
      category: "Food Support",
      title: "Sharing Food, Sharing Hope"
    },
    {
      image:
        "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=1200&q=85",
      category: "Healthcare",
      title: "Care For Every Community"
    },
    {
      image:
        "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
      category: "Women Empowerment",
      title: "Empowering Women"
    },
    {
      image:
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85",
      category: "Children",
      title: "Nurturing Young Minds"
    },
    {
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
      category: "Community",
      title: "Small Actions, Big Impact"
    },
   
    {
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=85",
      category: "Education",
      title: "Learning Without Limits"
    },
    
  ];

  return (
    <main className="gallery-page">

      <section className="gallery-hero">
        <div className="container">
          <p className="gallery-label">OUR GALLERY</p>

          <h1>Moments That Matter</h1>

          <p>
            Every picture tells a story of compassion, teamwork and positive
            change. Explore the moments that define CareBridge.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">

          <div className="gallery-heading">
            <div>
              <p>CAREBRIDGE IN ACTION</p>
              <h2>Making A Difference Together</h2>
            </div>

            <span>
              Real moments. Real people. Real impact.
            </span>
          </div>

          <div className="row g-4">
            {galleryItems.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="gallery-item">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="gallery-bottom">
        <div className="container">
          <div className="gallery-bottom-box">

            <p>BE PART OF THE JOURNEY</p>

            <h2>
              Every helping hand creates a better tomorrow.
            </h2>

            <a href="/register">
              Become a Volunteer
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Gallery;
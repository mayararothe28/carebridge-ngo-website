import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import "./Blogs.css";

function Blogs() {
  const sectionRefs = {
    hero: useScrollAnimation(),
    grid: useScrollAnimation(),
  };

  const blogPosts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      category: "Education",
      date: "October 12, 2026",
      title: "How Digital Learning is Changing Rural Mumbai",
      desc: "Exploring the impact of smart classrooms and digital tablets in underprivileged schools across the state. See how children are adopting new tech.",
      author: "Satyam Sharma",
      authorImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&q=80"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
      category: "Community",
      date: "September 28, 2026",
      title: "5 Ways You Can Support Local NGOs",
      desc: "You don't always need money to make a difference. From volunteering your time to social media advocacy, discover how you can help.",
      author: "Priya Patel",
      authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
      date: "September 15, 2026",
      title: "Highlights from Our Mega Medical Camp",
      desc: "Last weekend, over 500 residents received free medical checkups and medicines. Read the inspiring stories from our dedicated volunteer doctors.",
      author: "Dr. Amit Kumar",
      authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      category: "Relief",
      date: "August 22, 2026",
      title: "Preparing for the Winter Drive 2026",
      desc: "As temperatures drop, our team is gearing up to distribute over 10,000 blankets. Here's how our logistics and volunteer teams are preparing.",
      author: "Satyam Sharma",
      authorImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&q=80"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
      category: "Empowerment",
      date: "August 05, 2026",
      title: "Women's Skill Training Program Success",
      desc: "Meet the first batch of 50 women who successfully completed our 3-month tailoring and financial literacy course.",
      author: "Sneha Reddy",
      authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&q=80"
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      category: "Impact",
      date: "July 18, 2026",
      title: "Annual Impact Report: A Year in Review",
      desc: "We look back at the incredible milestones achieved this year. Thanks to our donors and volunteers, we reached over 50,000 families.",
      author: "CareBridge Admin",
      authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=50&q=80"
    }
  ];

  return (
    <main className="blogs-page">
      {/* Hero Section */}
      <section className="blogs-hero" ref={sectionRefs.hero}>
        <div className="container text-center">
          <span className="section-label">Our Blog</span>
          <h1>Insights, Stories & Impact</h1>
          <p>
            Stay updated with our latest initiatives, read inspiring stories from the ground, 
            and learn how together we are changing lives across Mumbai.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="blogs-grid-section bg-light" ref={sectionRefs.grid}>
        <div className="container">
          <div className="row">
            {blogPosts.map((blog, i) => (
              <div className="col-md-6 col-lg-4 mb-5" key={blog.id}>
                <div className="blog-card">
                  <div className="blog-card-img">
                    <img src={blog.img} alt={blog.title} />
                    <span className="blog-category">{blog.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-date">
                      <i className="bi bi-calendar3"></i> {blog.date}
                    </span>
                    <h3>{blog.title}</h3>
                    <p>{blog.desc}</p>
                    
                    <div className="blog-footer">
                      <div className="blog-author">
                        <img src={blog.authorImg} alt={blog.author} />
                        <span>{blog.author}</span>
                      </div>
                      <Link to="#" className="read-more-link">
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-outline-success px-4 py-2 fw-bold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blogs;

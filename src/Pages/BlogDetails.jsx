import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import "./BlogDetails.css";

// Same data as Blogs.jsx (in a real app, this would come from an API/Database)
const blogPostsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    category: "Education",
    date: "October 12, 2026",
    title: "How Digital Learning is Changing Rural Mumbai",
    desc: "Exploring the impact of smart classrooms and digital tablets in underprivileged schools across the state. See how children are adopting new tech.",
    content: `
      <p>In the heart of rural Mumbai, a quiet revolution is taking place. Traditional chalkboards are being replaced by smart screens, and heavy backpacks are making way for digital tablets.</p>
      
      <h3>The Digital Divide</h3>
      <p>For years, students in underprivileged areas struggled with outdated textbooks and a lack of resources. The digital divide wasn't just about access to the internet; it was about access to quality education. CareBridge recognized this gap and launched the 'Smart Classrooms' initiative.</p>
      
      <p>Our team, along with dedicated volunteers, installed solar-powered smart boards in 15 schools across the district. We also distributed over 500 pre-loaded tablets to high school students, ensuring they could study offline.</p>
      
      <blockquote>
        "I never thought I would see a computer in my classroom. Now, I can watch science experiments come to life on the screen. It makes learning so much fun!" - Ramesh, 9th Grade Student
      </blockquote>
      
      <h3>Training the Teachers</h3>
      <p>Technology is only as good as the people using it. That's why a major part of our initiative focused on teacher training. Over 50 teachers underwent a rigorous 2-week training program to integrate digital tools into their daily lesson plans.</p>
      
      <p>The results have been astonishing. Attendance has increased by 40%, and test scores in science and mathematics have seen a significant jump. This is just the beginning. With continued support from our donors, we plan to expand this initiative to 50 more schools by the end of next year.</p>
    `,
    author: "Satyam Sharma",
    authorImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    category: "Community",
    date: "September 28, 2026",
    title: "5 Ways You Can Support Local NGOs",
    desc: "You don't always need money to make a difference. From volunteering your time to social media advocacy, discover how you can help.",
    content: `
      <p>When people think about supporting NGOs, they often think of financial donations. While money is crucial for running programs, there are many other valuable ways you can contribute to causes you care about.</p>
      
      <h3>1. Volunteer Your Time and Skills</h3>
      <p>NGOs are always in need of helping hands. Whether you're a teacher, an accountant, a graphic designer, or just someone willing to help pack relief materials, your skills are invaluable.</p>
      
      <h3>2. Donate Materials</h3>
      <p>Clothes in good condition, old laptops, books, and non-perishable food items are always welcome. A laptop you no longer use could be the key to a child's digital education.</p>
      
      <h3>3. Social Media Advocacy</h3>
      <p>Your voice has power. Sharing an NGO's campaign on your social media can help them reach hundreds of potential new supporters. It costs nothing but can have a massive impact.</p>
      
      <h3>4. Corporate Matching</h3>
      <p>Many companies have CSR (Corporate Social Responsibility) programs. Check if your employer matches employee donations. If they do, your ₹1,000 donation could instantly become ₹2,000!</p>
      
      <h3>5. Organize a Fundraiser</h3>
      <p>Use your birthday or a special occasion to raise funds. Instead of gifts, ask your friends and family to donate to an NGO. It's a beautiful way to celebrate.</p>
    `,
    author: "Priya Patel",
    authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    category: "Healthcare",
    date: "September 15, 2026",
    title: "Highlights from Our Mega Medical Camp",
    desc: "Last weekend, over 500 residents received free medical checkups and medicines. Read the inspiring stories from our dedicated volunteer doctors.",
    content: `
      <p>Access to basic healthcare remains a luxury for many families living in the slums of Mumbai. Minor illnesses often turn severe simply because a doctor's visit is unaffordable. To address this, CareBridge organized a 'Mega Medical Camp' last weekend.</p>
      
      <h3>A Day of Healing</h3>
      <p>The camp started early at 8:00 AM, but the lines had formed long before that. A team of 15 volunteer doctors, including pediatricians, general physicians, and eye specialists, worked tirelessly throughout the day.</p>
      
      <p>We successfully screened over 500 residents. More than 100 children were treated for malnutrition and seasonal infections, and free medicines were distributed to everyone who needed them.</p>
      
      <h3>Spotlight: Dr. Anjali's Dedication</h3>
      <p>One of our most dedicated volunteers, Dr. Anjali, spent her entire Sunday examining elderly patients. "It's heartbreaking to see how many people suffer from easily treatable conditions like hypertension and diabetes just because they lack awareness and medication. Being here today reminds me why I became a doctor," she shared.</p>
      
      <p>We are incredibly grateful to our medical volunteers and sponsors who made this event possible. We are planning another camp next month to provide follow-up care.</p>
    `,
    author: "Dr. Amit Kumar",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  // Default fallback for IDs 4, 5, 6
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
    category: "Relief",
    date: "August 22, 2026",
    title: "Preparing for the Winter Drive 2026",
    desc: "As temperatures drop, our team is gearing up to distribute over 10,000 blankets.",
    content: "<p>Winter can be harsh for those living on the streets. Our annual winter drive is back, and this year we aim to distribute 10,000 blankets. Join us as a volunteer or donate to help keep someone warm this winter.</p>",
    author: "Satyam Sharma",
    authorImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&q=80",
    category: "Empowerment",
    date: "August 05, 2026",
    title: "Women's Skill Training Program Success",
    desc: "Meet the first batch of 50 women who successfully completed our 3-month course.",
    content: "<p>Financial independence is crucial for empowerment. We are proud to announce the graduation of 50 women from our tailoring and digital literacy course. Many have already started taking small orders, supporting their families.</p>",
    author: "Sneha Reddy",
    authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    category: "Impact",
    date: "July 18, 2026",
    title: "Annual Impact Report: A Year in Review",
    desc: "We look back at the incredible milestones achieved this year.",
    content: "<p>This past year has been challenging but rewarding. From feeding 50,000 families to educating 2,000 children, our annual impact report highlights the transparent use of funds and the real lives changed.</p>",
    author: "CareBridge Admin",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
  }
];

function BlogDetails() {
  const { id } = useParams();
  const blogId = parseInt(id);
  
  // Find the blog post or default to the first one if not found
  const blog = blogPostsData.find(b => b.id === blogId) || blogPostsData[0];

  useEffect(() => {
    // Scroll to top when loading a new blog post
    window.scrollTo(0, 0);
  }, [blogId]);

  const handleShare = (platform) => {
    const pageUrl = window.location.href;
    const shareText = `Check out this article on CareBridge: "${blog.title}"`;
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent(shareText);

    let shareUrl = "";

    switch (platform) {
      case "wa":
        shareUrl = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
        window.open(shareUrl, "_blank", "noopener,noreferrer");
        break;
      case "fb":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        window.open(shareUrl, "_blank", "noopener,noreferrer");
        break;
      case "tw":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        window.open(shareUrl, "_blank", "noopener,noreferrer");
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        window.open(shareUrl, "_blank", "noopener,noreferrer");
        break;
      case "copy":
        if (navigator.clipboard) {
          navigator.clipboard.writeText(pageUrl).then(() => {
            alert("Article link copied to clipboard!");
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <main className="blog-details-page">
      {/* Blog Hero Image */}
      <section className="blog-details-hero" style={{ backgroundImage: `url(${blog.img})` }}>
        <div className="overlay"></div>
        <div className="container position-relative">
          <span className="blog-category-badge">{blog.category}</span>
          <h1>{blog.title}</h1>
          
          <div className="blog-meta">
            <div className="meta-author">
              <img src={blog.authorImg} alt={blog.author} />
              <span>By {blog.author}</span>
            </div>
            <span className="meta-divider">•</span>
            <span className="meta-date"><i className="bi bi-calendar3"></i> {blog.date}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="blog-text-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
              
              {/* Premium Inline Donation CTA */}
              <div className="blog-inline-donate mt-5">
                <div className="donate-icon-wrapper">
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>
                <div className="donate-text">
                  <h4>Inspired by our work?</h4>
                  <p>Your contribution helps us write more success stories and bring hope to communities in need.</p>
                </div>
                <Link to="/donate" className="btn-inline-donate">
                  Make a Donation <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              <div className="blog-share mt-5">
                <span>Share this article:</span>
                <div className="share-buttons">
                  <button className="btn-share wa" onClick={() => handleShare("wa")} title="Share on WhatsApp">
                    <i className="bi bi-whatsapp"></i>
                  </button>
                  <button className="btn-share fb" onClick={() => handleShare("fb")} title="Share on Facebook">
                    <i className="bi bi-facebook"></i>
                  </button>
                  <button className="btn-share tw" onClick={() => handleShare("tw")} title="Share on X (Twitter)">
                    <i className="bi bi-twitter-x"></i>
                  </button>
                  <button className="btn-share linkedin" onClick={() => handleShare("linkedin")} title="Share on LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </button>
                  <button className="btn-share copy" onClick={() => handleShare("copy")} title="Copy Link">
                    <i className="bi bi-link-45deg"></i>
                  </button>
                </div>
              </div>

              <div className="text-center mt-5">
                <Link to="/blogs" className="btn btn-outline-success px-4 py-2 fw-bold rounded-pill">
                  <i className="bi bi-arrow-left me-2"></i> Back to all Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogDetails;

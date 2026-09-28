const fs = require('fs');

// 1. Add class "read-more-link" to Home.jsx
let homeJsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
homeJsx = homeJsx.replace(
  /<span style={{ fontWeight: "bold", color: "var\(--primary\)" }}>Read More <i className="bi bi-arrow-right"><\/i><\/span>/g,
  '<span className="read-more-link" style={{ fontWeight: "bold", color: "var(--primary)" }}>Read More <i className="bi bi-arrow-right"></i></span>'
);
fs.writeFileSync('src/Pages/Home.jsx', homeJsx);

// 2. Add animation CSS globally
let indexCss = fs.readFileSync('src/index.css', 'utf8');
if (!indexCss.includes('.read-more-link i')) {
  indexCss += `
/* Hover animation for Read More arrows */
.read-more-link i {
  display: inline-block;
  transition: transform 0.3s ease !important;
}

.story-card:hover .read-more-link i,
.blog-card:hover .read-more-link i {
  transform: translateX(6px) !important;
}
`;
  fs.writeFileSync('src/index.css', indexCss);
}

console.log('Done!');

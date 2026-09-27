const fs = require('fs');

const heroCSS = `
.about-hero {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, #eaf7ef, #f6fbf8);
}

.about-hero .section-label {
  display: inline-block;
  color: var(--primary);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.about-hero h1 {
  font-size: 46px;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.about-hero p:last-child {
  max-width: 600px;
  margin: auto;
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.8;
}
`;

// Fix About.css
let css = fs.readFileSync('src/Pages/About.css', 'utf8');
// replace from .about-hero { to the end of .about-hero-badge span { ... }
// Actually, it's safer to just replace .about-hero up to .about-hero-buttons
css = css.replace(
  /\.about-hero \{[\s\S]*?\}\s*\.about-hero-content \{[\s\S]*?\}\s*\.about-hero h1 \{[\s\S]*?\}\s*\.about-hero-description \{[\s\S]*?\}\s*\.about-hero-buttons \{[\s\S]*?\}\s*\.about-hero-image-wrapper \{[\s\S]*?\}\s*\.about-hero-image \{[\s\S]*?\}\s*\.about-hero-badge \{[\s\S]*?\}\s*\.about-hero-badge strong \{[\s\S]*?\}\s*\.about-hero-badge span \{[\s\S]*?\}/,
  heroCSS
);
fs.writeFileSync('src/Pages/About.css', css);

// Fix About.jsx
let jsx = fs.readFileSync('src/Pages/About.jsx', 'utf8');
jsx = jsx.replace(
  /<section className="about-hero" ref=\{sectionRefs\.hero\}>[\s\S]*?<\/section>/,
  `<section className="about-hero" ref={sectionRefs.hero}>
        <div className="container">
          <div className="fade-in">
            <span className="section-label">About Us</span>
            <h1>Building a Better Future, Together</h1>
            <p>
              CareBridge works with communities to create better opportunities,
              support children and families, and build a healthier and more
              inclusive future for everyone.
            </p>
          </div>
        </div>
      </section>`
);
fs.writeFileSync('src/Pages/About.jsx', jsx);

console.log('Done!');

const fs = require('fs');

const heroCSS = `
.HERO_CLASS {
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, #eaf7ef, #f6fbf8);
}

.HERO_CLASS .section-label {
  display: inline-block;
  color: var(--primary);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.HERO_CLASS h1 {
  font-size: 46px;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.HERO_CLASS p:last-child {
  max-width: 600px;
  margin: auto;
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.8;
}
`;

// === CAMPAIGNS CSS ===
let css = fs.readFileSync('src/Pages/Campaigns.css', 'utf8');
css = css.replace(
  /\.campaigns-hero \{[\s\S]*?\}\s*\.campaigns-hero h1 \{[\s\S]*?\}\s*\.campaigns-hero p \{[\s\S]*?\}/,
  heroCSS.replace(/HERO_CLASS/g, 'campaigns-hero')
);
fs.writeFileSync('src/Pages/Campaigns.css', css);

// === EVENTS CSS ===
css = fs.readFileSync('src/Pages/Events.css', 'utf8');
css = css.replace(
  /\.events-hero \{[\s\S]*?\}\s*\.events-hero h1 \{[\s\S]*?\}\s*\.events-hero p \{[\s\S]*?\}/,
  heroCSS.replace(/HERO_CLASS/g, 'events-hero')
);
fs.writeFileSync('src/Pages/Events.css', css);

// === BLOGS CSS ===
css = fs.readFileSync('src/Pages/Blogs.css', 'utf8');
css = css.replace(
  /\/\* ===== Blogs Hero ===== \*\/\s*\.blogs-hero \{[\s\S]*?\}\s*\.blogs-hero \.section-label \{[\s\S]*?\}\s*\.blogs-hero h1 \{[\s\S]*?\}\s*\.blogs-hero p \{[\s\S]*?\}/,
  heroCSS.replace(/HERO_CLASS/g, 'blogs-hero')
);
fs.writeFileSync('src/Pages/Blogs.css', css);

// === EVENTS JSX ===
let jsx = fs.readFileSync('src/Pages/Events.jsx', 'utf8');
jsx = jsx.replace(
  /<section className="events-hero fade-in" ref=\{sectionRefs\.hero\}>\s*<div className="container text-center">\s*<span className="section-label">(.*?)<\/span>\s*<h1>(.*?)<\/h1>\s*<p>([\s\S]*?)<\/p>\s*<\/div>\s*<\/section>/,
  `<section className="events-hero" ref={sectionRefs.hero}>
        <div className="container">
          <div className="fade-in">
            <span className="section-label">$1</span>
            <h1>$2</h1>
            <p>$3</p>
          </div>
        </div>
      </section>`
);
fs.writeFileSync('src/Pages/Events.jsx', jsx);

// === BLOGS JSX ===
jsx = fs.readFileSync('src/Pages/Blogs.jsx', 'utf8');
jsx = jsx.replace(
  /<section className="blogs-hero" ref=\{sectionRefs\.hero\}>\s*<div className="container text-center">/,
  '<section className="blogs-hero" ref={sectionRefs.hero}>\n      <div className="container">\n          <div className="fade-in">'
);
fs.writeFileSync('src/Pages/Blogs.jsx', jsx);

console.log('Done!');

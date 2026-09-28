const fs = require('fs');

// 1. Fix Home.jsx StatCard
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
jsx = jsx.replace(
  /function StatCard\(\{\s*end,\s*suffix,\s*label,\s*icon\s*\}\) \{[\s\S]*?return \([\s\S]*?<\/div>\s*\);\s*\}/,
  `function StatCard({ end, suffix, label, icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0" ref={ref}>
      <div className="stat-card d-flex align-items-center justify-content-center justify-content-lg-center gap-3">
        <div className="stat-icon-wrapper m-0 flex-shrink-0">
          <i className={\`bi \${icon}\`}></i>
        </div>
        <div className="stat-text-wrapper text-start">
          <h3 className="mb-0">
            {count.toLocaleString()}
            {suffix}
          </h3>
          <p className="mb-0">{label}</p>
        </div>
      </div>
    </div>
  );
}`
);
fs.writeFileSync('src/Pages/Home.jsx', jsx);

// 2. Fix Home.css for hero-stats-wrapper
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

// replace .hero-stats-wrapper block
css = css.replace(
  /\.hero-stats-wrapper \{[\s\S]*?\}/,
  `.hero-stats-wrapper {
  margin-top: 35px;
  padding: 30px 20px;
  background: #ffffff;
  border: none;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 10;
}`
);

// Optional: fix mobile padding if .hero-stats-wrapper is inside a media query
css = css.replace(
  /@media \(max-width: 576px\) \{[\s\S]*?\.hero-stats-wrapper \{[\s\S]*?\}/,
  (match) => {
    return match.replace(
      /\.hero-stats-wrapper \{[\s\S]*?\}/,
      `.hero-stats-wrapper {\n    padding: 20px 15px;\n  }`
    );
  }
);

fs.writeFileSync('src/Pages/Home.css', css);

console.log('Done!');

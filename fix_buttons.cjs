const fs = require('fs');

// 1. Fix Home.jsx
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// Remove fs-6
jsx = jsx.replace(/className="btn-see-all fs-6"/g, 'className="btn-see-all"');

// Remove inline styles from blogs button
jsx = jsx.replace(
  /<Link to="\/blogs" className="btn-see-all" style=\{\{ padding: "10px 25px", border: "2px solid var\(--primary\)", borderRadius: "30px", textDecoration: "none", color: "var\(--primary\)", fontWeight: "bold" \}\}>/g,
  '<Link to="/blogs" className="btn-see-all">'
);

fs.writeFileSync('src/Pages/Home.jsx', jsx);

// 2. Fix Home.css
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /\.btn-see-all \{[\s\S]*?transition: all 0\.3s ease;\n\}/,
  `.btn-see-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  padding: 10px 25px;
  border: 2px solid var(--primary);
  border-radius: 30px;
  transition: all 0.3s ease;
}`
);

css = css.replace(
  /\.btn-see-all:hover \{[\s\S]*?gap: 10px;\n\}/,
  `.btn-see-all:hover {
  background: var(--primary);
  color: #fff;
  gap: 10px;
}`
);

fs.writeFileSync('src/Pages/Home.css', css);

console.log('Done!');

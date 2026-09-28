const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// The wrapper currently is <div className="fade-in">
// We will change it to <div>, and add fade-in to the h1.
jsx = jsx.replace(
  /<div className="fade-in">\s*<span className="hero-badge">/g,
  '<div>\n                <span className="hero-badge">'
);

jsx = jsx.replace(
  /<h1>\s*<span>Together We Care\.<\/span>\s*<br \/>\s*<span className="text-accent">Together We Change\.<\/span>\s*<\/h1>/g,
  '<h1 className="fade-in">\n                  <span>Together We Care.</span>\n                  <br />\n                  <span className="text-accent">Together We Change.</span>\n                </h1>'
);

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

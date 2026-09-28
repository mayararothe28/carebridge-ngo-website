const fs = require('fs');

// 1. Remove pointerEvents: 'none' from Home.jsx
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
jsx = jsx.replace(
  /className="campaign-btn" style={{pointerEvents: 'none'}}/g,
  'className="campaign-btn"'
);
fs.writeFileSync('src/Pages/Home.jsx', jsx);

// 2. Add transition to .campaign-btn in Campaigns.css
let css = fs.readFileSync('src/Pages/Campaigns.css', 'utf8');
css = css.replace(
  /\.campaign-btn \{/,
  '.campaign-btn {\n  transition: all 0.3s ease !important;'
);
// Make sure .campaign-btn:hover changes properly.
fs.writeFileSync('src/Pages/Campaigns.css', css);

// 3. Make sure .campaign-btn has transition in Home.css too just in case
let homeCss = fs.readFileSync('src/Pages/Home.css', 'utf8');
homeCss = homeCss.replace(
  /\.campaign-btn \{/,
  '.campaign-btn {\n  transition: all 0.3s ease !important;'
);
fs.writeFileSync('src/Pages/Home.css', homeCss);

console.log('Done!');

const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

// Replace margin-bottom: -85px; with transform: translateY(50%);
css = css.replace(
  /z-index: 10;\n  margin-bottom: -85px;/g,
  'z-index: 10;\n  transform: translateY(50%);\n  margin-bottom: 0;'
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

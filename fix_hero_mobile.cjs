const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Change mobile padding for page-hero
css = css.replace(
  /padding: 85px 15px 35px !important;/g,
  'padding: 100px 15px 60px !important;'
);

fs.writeFileSync('src/index.css', css);
console.log('Fixed mobile hero padding');

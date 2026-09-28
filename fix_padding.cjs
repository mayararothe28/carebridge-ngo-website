const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

// Replace desktop padding
css = css.replace(
  /\.hero \{\n  position: relative;\n  padding: 110px 0 0;/g,
  '.hero {\n  position: relative;\n  padding: 160px 0 0;'
);

// Replace mobile padding
css = css.replace(
  /\.hero \{\n    padding: 100px 0 0;\n  \}/g,
  '.hero {\n    padding: 130px 0 0;\n  }'
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done padding!');

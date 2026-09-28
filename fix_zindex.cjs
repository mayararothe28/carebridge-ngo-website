const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

// Ensure .hero has !important for z-index
css = css.replace(
  /z-index: 2;/g,
  'z-index: 2 !important;'
);

// Ensure .about-home has position: relative and z-index: 1
css = css.replace(
  /\.about-home \{[\s\S]*?padding-top: 100px !important;\n\}/,
  (match) => {
    return match.replace(
      'padding-top: 100px !important;',
      'padding-top: 120px !important;\n  position: relative !important;\n  z-index: 1 !important;'
    );
  }
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

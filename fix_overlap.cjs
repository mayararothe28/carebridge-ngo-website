const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /\.hero-stats-wrapper \{[\s\S]*?z-index: 10;\n\}/,
  (match) => {
    return match.replace(
      'z-index: 10;',
      'z-index: 10;\n  margin-bottom: -85px;'
    );
  }
);

// We should also make sure .hero bottom padding is small enough or zero
css = css.replace(
  /padding: 110px 0 35px;/,
  'padding: 110px 0 0;'
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

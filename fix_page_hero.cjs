const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// We remove the strict height and max-height constraints, and overflow: hidden
css = css.replace(/height: 380px !important;\n/g, '');
css = css.replace(/max-height: 380px !important;\n/g, '');
css = css.replace(/overflow: hidden !important;\n/g, '');

// Also change padding to include bottom padding so it doesn't touch the edge
css = css.replace(/padding: 72px 20px 0 !important;\n/g, 'padding: 100px 20px 60px !important;\n');

fs.writeFileSync('src/index.css', css);
console.log('Fixed page-hero in index.css');

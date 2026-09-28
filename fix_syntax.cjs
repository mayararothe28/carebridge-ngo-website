const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Fix the syntax error in both blocks of index.css
css = css.replace(/    min-  max-  padding: 100px 20px 60px !important;\n/g, '  padding: 100px 20px 60px !important;\n');
css = css.replace(/    min-  max-  padding: 100px 20px 60px !important;/g, '  padding: 100px 20px 60px !important;');

fs.writeFileSync('src/index.css', css);
console.log('Fixed syntax error');

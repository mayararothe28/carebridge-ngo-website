const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /padding: 100px 0 60px;/g,
  'padding: 100px 0 0;'
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

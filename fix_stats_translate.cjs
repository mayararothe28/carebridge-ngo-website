const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /transform: translateY\(50%\);/g,
  'transform: translateY(80px);'
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

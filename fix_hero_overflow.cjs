const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /\.hero \{[\s\S]*?overflow: hidden;\n\}/,
  (match) => {
    return match.replace('overflow: hidden;', '');
  }
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

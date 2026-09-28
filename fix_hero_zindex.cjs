const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /\.hero \{[\s\S]*?background: linear-gradient\([\s\S]*?\);\n/,
  (match) => {
    return match + '  z-index: 2;\n';
  }
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

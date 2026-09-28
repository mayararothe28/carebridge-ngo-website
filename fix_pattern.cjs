const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /\.hero-bg-pattern \{[\s\S]*?pointer-events: none;\n\}/,
  `.hero-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 85% 30%, rgba(25, 135, 84, 0.06) 0%, transparent 50%);
  pointer-events: none;
}`
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

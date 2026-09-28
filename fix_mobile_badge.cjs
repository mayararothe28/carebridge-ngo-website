const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

const oldCss = `  .about-experience {
    position: static;
    display: inline-flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 15px;
    border-radius: var(--radius-sm);
  }`;

const newCss = `  .about-experience {
    position: absolute;
    top: -10px;
    left: -10px;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    gap: 0;
    padding: 12px 18px;
    border-radius: var(--radius-sm);
  }`;

css = css.replace(oldCss, newCss);
fs.writeFileSync('src/Pages/Home.css', css);
console.log('Done!');

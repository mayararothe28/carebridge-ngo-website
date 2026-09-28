const fs = require('fs');
let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

css = css.replace(
  /\/\* Horizontal Line \(Bottom of first row\) \*\/[\s\S]*?\.stat-card \{/,
  `/* Horizontal Line (Bottom of first row) */
  .stat-card-col:nth-child(1)::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%; 
    right: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  .stat-card-col:nth-child(2)::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0; 
    right: 15%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  
  .stat-card {`
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('Lines perfected');

const fs = require('fs');

let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

const oldCss = `  /* Vertical Line (Right side of odd items) */
  .stat-card-col:nth-child(odd)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 15%; 
    bottom: 15%;
    width: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  
  /* Horizontal Line (Bottom of first row) */
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
  }`;

const newCss = `  /* Col 1 (Top-Left) Vertical Line */
  .stat-card-col:nth-child(1)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 15%; 
    bottom: 10%;
    width: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  /* Col 1 (Top-Left) Horizontal Line */
  .stat-card-col:nth-child(1)::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%; 
    right: 10%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  
  /* Col 2 (Top-Right) Horizontal Line */
  .stat-card-col:nth-child(2)::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 15%; 
    left: 10%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  
  /* Col 3 (Bottom-Left) Vertical Line */
  .stat-card-col:nth-child(3)::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 15%; 
    top: 10%;
    width: 1px;
    background: rgba(0, 0, 0, 0.12);
  }`;

css = css.replace(oldCss, newCss);
fs.writeFileSync('src/Pages/Home.css', css);
console.log('Broken cross fixed');

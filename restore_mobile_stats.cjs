const fs = require('fs');

let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

// Replace the current mobile stats CSS block
css = css.replace(
  /\/\* Custom Stat Card Grid Layout \*\/[\s\S]*$/,
  `/* Custom Stat Card Grid Layout */
.stat-text-wrapper {
  width: 150px;
}

@media (max-width: 991px) {
  .hero-stats-wrapper {
    padding: 20px 10px !important;
  }
  
  .hero-stats-wrapper .row {
    margin: 0;
  }
  
  .stat-card-col {
    padding: 20px 10px !important;
    border: none !important;
    position: relative;
  }
  
  /* Vertical Line (Right side of odd items) */
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
  .stat-card-col:nth-child(1)::before,
  .stat-card-col:nth-child(2)::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%; 
    right: 15%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  
  .stat-card {
    flex-direction: column !important;
    gap: 12px !important;
    padding: 0 !important;
  }
  
  .stat-text-wrapper {
    width: 100% !important;
    text-align: center !important;
  }
  
  /* Icons stay centered */
  .stat-icon-wrapper {
    margin: 0 auto !important;
  }
  
  /* Restoring the original font sizes for mobile slightly scaled down */
  .stat-card h3 {
    font-size: 24px !important;
    margin-bottom: 6px !important;
  }
  
  .stat-text-wrapper p {
    font-size: 14px !important;
  }
}
`
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('CSS fixed');

const fs = require('fs');

let css = fs.readFileSync('src/Pages/Home.css', 'utf8');

// Replace the old mobile block we added at the end
css = css.replace(
  /\/\* Custom Stat Card Grid Layout \*\/[\s\S]*$/,
  `/* Custom Stat Card Grid Layout */
.stat-text-wrapper {
  width: 150px;
}

@media (max-width: 991px) {
  .hero-stats-wrapper {
    padding: 30px 10px !important;
  }
  
  .hero-stats-wrapper .row {
    margin: 0;
    position: relative;
  }

  /* The inner cross dividers that don't touch edges */
  .hero-stats-wrapper .row::before {
    content: '';
    position: absolute;
    top: 15%; bottom: 15%;
    left: 50%;
    width: 1px;
    background: rgba(0, 0, 0, 0.2);
  }
  .hero-stats-wrapper .row::after {
    content: '';
    position: absolute;
    left: 10%; right: 10%;
    top: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
  }
  
  .stat-card-col {
    padding: 30px 10px !important;
    border: none !important;
  }
  
  .stat-card-col:nth-child(1),
  .stat-card-col:nth-child(2),
  .stat-card-col:nth-child(odd) {
    border: none !important;
  }
  
  .stat-card {
    flex-direction: column !important;
    gap: 15px !important;
    padding: 0 !important;
  }
  
  .stat-text-wrapper {
    width: 100% !important;
    text-align: center !important;
  }
  
  /* Remove circle from icon */
  .stat-icon-wrapper {
    background: transparent !important;
    border: none !important;
    width: auto !important;
    height: auto !important;
    margin: 0 auto 5px auto !important;
    box-shadow: none !important;
  }
  
  .stat-icon-wrapper i {
    font-size: 38px !important;
    color: #4a5568 !important; /* Dark gray outline look */
  }
  
  .stat-card h3 {
    font-size: 28px !important;
    font-weight: 800 !important;
    color: #1a202c !important;
    margin-bottom: 6px !important;
  }
  
  .stat-text-wrapper p {
    font-size: 15px !important;
    color: #4a5568 !important;
    font-weight: 500 !important;
  }
}
`
);

fs.writeFileSync('src/Pages/Home.css', css);
console.log('CSS fixed');

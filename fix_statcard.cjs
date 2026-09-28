const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

jsx = jsx.replace(
  /<div className="stat-text-wrapper text-start">/g,
  '<div className="stat-text-wrapper text-start" style={{ minWidth: "140px" }}>'
);

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

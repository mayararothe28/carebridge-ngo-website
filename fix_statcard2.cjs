const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

jsx = jsx.replace(
  /style={{ minWidth: "140px" }}/g,
  'style={{ width: "150px" }}'
);

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

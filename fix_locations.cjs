const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

jsx = jsx.replace('across rural Maharashtra', 'across Mumbai');
jsx = jsx.replace('Pune and Nagpur', 'Mumbai');

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

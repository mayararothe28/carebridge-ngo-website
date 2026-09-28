const fs = require('fs');

let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
jsx = jsx.replace(/suffix=" \+"/g, 'suffix="+"');
fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('JSX suffix reverted');

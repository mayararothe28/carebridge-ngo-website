const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// Replace d-block with d-flex flex-column h-100
jsx = jsx.replace(
  /className=\{`campaign-card fade-in stagger-\$\{i \+ 1\} text-decoration-none d-block text-dark`\}/g,
  'className={`campaign-card fade-in stagger-${i + 1} text-decoration-none d-flex flex-column h-100 text-dark`}'
);

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

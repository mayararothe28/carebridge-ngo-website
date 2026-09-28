const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// 1. Remove typedLine1 and typedLine2 states
jsx = jsx.replace(/const \[typedLine1, setTypedLine1\] = useState\(""\);\n/, '');
jsx = jsx.replace(/const \[typedLine2, setTypedLine2\] = useState\(""\);\n/, '');

// 2. Remove useEffect block for typing
jsx = jsx.replace(/useEffect\(\(\) => \{[\s\S]*?const fullLine1 = "Together We Care\.";[\s\S]*?return \(\) => \{[\s\S]*?\}\s*\}, \[\]\);\n/g, '');

// 3. Replace {typedLine1} and {typedLine2} with static text
jsx = jsx.replace(/<span>\{typedLine1\}<\/span>/, '<span>Together We Care.</span>');
jsx = jsx.replace(/\{typedLine1\.length >= 17 && <br \/>\}/, '<br />');
jsx = jsx.replace(/<span className="text-accent">\{typedLine2\}<\/span>/, '<span className="text-accent">Together We Change.</span>');

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

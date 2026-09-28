const fs = require('fs');

let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// 1. Remove typedDesc state
jsx = jsx.replace(/const \[typedDesc, setTypedDesc\] = useState\(""\);\n/, '');

// 2. Remove fullDesc from useEffect and replace with static string in render
const descText = "We support children, families and communities through education, food, healthcare and meaningful volunteer activities. Every small action creates a lasting impact.";

// Replace {typedDesc} with actual text
jsx = jsx.replace(/\{typedDesc\}/, descText);

// 3. Remove typing logic for description in useEffect
jsx = jsx.replace(
  /pause2 = setTimeout\(\(\) => \{[\s\S]*?timerDesc = setInterval\(\(\) => \{[\s\S]*?idxDesc\+\+;[\s\S]*?setTypedDesc\(fullDesc\.slice\(0, idxDesc\)\);[\s\S]*?if \(idxDesc >= fullDesc\.length\) \{[\s\S]*?clearInterval\(timerDesc\);[\s\S]*?\}[\s\S]*?\}, 22\);[\s\S]*?\}, 220\);/g,
  ''
);

// Clean up unused variables
jsx = jsx.replace(/let idxDesc = 0;\n/g, '');
jsx = jsx.replace(/let timerDesc = null;\n/g, '');
jsx = jsx.replace(/const fullDesc =[\s\S]*?impact\.";\n/g, '');

fs.writeFileSync('src/Pages/Home.jsx', jsx);

console.log("Done!");

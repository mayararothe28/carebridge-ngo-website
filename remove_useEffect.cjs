const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// Find the start of useEffect
const startStr = 'useEffect(() => {\n    const fullLine1 = "Together We Care.";';
const startIndex = jsx.indexOf('useEffect(() => {\n    const fullLine1 = "Together We Care.";');

if (startIndex !== -1) {
  // Find the end of this useEffect block (we know it ends around line 90-100 with '}, []);')
  const endStr = '  }, []);\n';
  const endIndex = jsx.indexOf(endStr, startIndex);
  
  if (endIndex !== -1) {
    const toRemove = jsx.substring(startIndex, endIndex + endStr.length);
    jsx = jsx.replace(toRemove, '');
    fs.writeFileSync('src/Pages/Home.jsx', jsx);
    console.log("Removed useEffect block");
  } else {
    console.log("End index not found");
  }
} else {
  console.log("Start index not found");
}


const fs = require('fs');

let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// Add states
jsx = jsx.replace(
  /const \[donateSuccess, setDonateSuccess\] = useState\(false\);\n/,
  `const [donateSuccess, setDonateSuccess] = useState(false);\n
  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");

  useEffect(() => {
    const fullLine1 = "Together We Care.";
    const fullLine2 = "Together We Change.";
    
    let idx1 = 0;
    let idx2 = 0;
    let timer1 = null;
    let timer2 = null;
    let pause1 = null;

    timer1 = setInterval(() => {
      idx1++;
      setTypedLine1(fullLine1.slice(0, idx1));
      if (idx1 >= fullLine1.length) {
        clearInterval(timer1);
        pause1 = setTimeout(() => {
          timer2 = setInterval(() => {
            idx2++;
            setTypedLine2(fullLine2.slice(0, idx2));
            if (idx2 >= fullLine2.length) {
              clearInterval(timer2);
            }
          }, 55);
        }, 180);
      }
    }, 55);

    return () => {
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
      if (pause1) clearTimeout(pause1);
    };
  }, []);\n`
);

// Replace h1
const oldH1 = `<h1 className="fade-in">
                  <span>Together We Care.</span>
                  <br />
                  <span className="text-accent">Together We Change.</span>
                </h1>`;
const newH1 = `<h1 className="fade-in">
                  <span>{typedLine1}</span>
                  <br />
                  <span className="text-accent">{typedLine2}</span>
                </h1>`;

jsx = jsx.replace(oldH1, newH1);

fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

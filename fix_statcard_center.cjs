const fs = require('fs');
let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

const oldCard = `function StatCard({ end, suffix, label, icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div className="col-6 col-md-6 col-lg-3 stat-card-col" ref={ref}>
      <div className="stat-card d-flex align-items-center justify-content-center justify-content-lg-center gap-3">
        <div className="stat-icon-wrapper m-0 flex-shrink-0">
          <i className={\`bi \${icon}\`}></i>
        </div>
        <div className="stat-text-wrapper text-start">
          <h3 className="mb-0">
            {count.toLocaleString()}
            {suffix}
          </h3>
          <p className="mb-0">{label}</p>
        </div>
      </div>
    </div>
  );
}`;

const newCard = `function StatCard({ end, suffix, label, icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div className="col-6 col-md-6 col-lg-3 stat-card-col" ref={ref}>
      <div className="stat-card d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 gap-lg-3">
        <div className="stat-icon-wrapper flex-shrink-0 mx-auto mx-lg-0">
          <i className={\`bi \${icon}\`}></i>
        </div>
        <div className="stat-text-wrapper text-center text-lg-start">
          <h3 className="mb-0">
            {count.toLocaleString()}
            {suffix}
          </h3>
          <p className="mb-0">{label}</p>
        </div>
      </div>
    </div>
  );
}`;

jsx = jsx.replace(oldCard, newCard);
fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('JSX centered!');

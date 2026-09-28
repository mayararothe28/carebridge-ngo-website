const fs = require('fs');

let jsx = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

const oldStr = `            ))}
          </div>
        </div>
      </section>

      
      <section className="stories blogs-preview"`;

const newStr = `            ))}
          </div>

          <div className="text-center mt-4 fade-in">
            <Link to="/campaigns" className="btn-see-all">
              View All Campaigns <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="stories blogs-preview"`;

jsx = jsx.replace(oldStr, newStr);
fs.writeFileSync('src/Pages/Home.jsx', jsx);
console.log('Done!');

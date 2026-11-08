const fs = require('fs');
const { add } = require('./math');

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync(
  'dist/index.html',
  `<!doctype html>
<h1>My CI/CD demo</h1>
<p>Version 1.0</p>
<p>2 + 3 = ${add(2, 3)}</p>`
);
console.log('Built dist/index.html');
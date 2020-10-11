// Modules
const fs = require('fs').promises;
const http = require('http');
const url = require('url');

// Get Data
const bicycles = require('./data/data.json');

// Create Server
const server = http.createServer(async (req, res) => {
  if (req.url === '/favicon.ico') return;
  
  const pathname = url.parse(req.url, true).pathname;
  let id = url.parse(req.url, true).query.id;

  // MAIN PAGE
  if (pathname === '/') {
    let html = await fs.readFile(`${__dirname}/views/bicycles.html`, 'utf-8');
    let eachBicycle = await fs.readFile(`${__dirname}/views/partials/bicycle.html`,'utf-8');

    const allTheBicycles = bicycles.map((bicycle) => replaceTemplate(eachBicycle, bicycle)).join(' ');
    html = html.replace(/<%AllTheBicycles%>/g, allTheBicycles);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  // OVERVIEW
  else if (pathname === '/bicycle' && id >= 0 && id < bicycles.length) {
    let html = await fs.readFile(`${__dirname}/views/overview.html`, 'utf-8')
    html = replaceTemplate(html, bicycles[id]);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  // IMAGE
  else if (/\.(png)$/i.test(req.url)) {
    let image = await fs.readFile(`${__dirname}/public/images/${req.url.slice(1)}`);
    res.writeHead(200, { 'Content-Type': 'image/png', });
    res.end(image);
  }

  // CSS
  else if (/\.(css)$/i.test(req.url)) {
    let css = await fs.readFile(`${__dirname}/public/css/${req.url.slice(1)}`);
    res.writeHead(200, { 'Content-Type': 'text/css', });
    res.end(css);
  }

  // SVG
  else if (/\.(svg)$/i.test(req.url)) {
    let svg = await fs.readFile(`${__dirname}/public/images/${req.url.slice(1)}`);
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.end(svg);
  }

  // INVALID URL
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>404</h1><p>Not Found</p>');
  }
});

function replaceTemplate(html, bicycle) {
  const  { originalPrice, hasDiscount, discount } = bicycle;
  
  let price = originalPrice;
  if (hasDiscount === true) {
    price = (price * (100 - discount)) / 100;
  }

  html = html.replace(/<%NAME%>/g,        bicycle.name);
  html = html.replace(/<%IMAGE%>/g,       bicycle.image);
  html = html.replace(/<%NEWPRICE%>/g,    `$${price}.00`);
  html = html.replace(/<%ID%>/g,          bicycle.id);
  html = html.replace(/<%OLDPRICE%>/g,    hasDiscount ? `$${originalPrice}` : '');
  html = html.replace(/<%DISCOUNT%>/g,    hasDiscount ? `<div class="discount__rate"><p>${discount}% Off</p></div>`: '');

  for (let i = 1; i <= bicycle.star; i++) {
    html = html.replace(/<%STAR%>/, 'checked');
  }
  html = html.replace(/<%STAR%>/g, '');

  return html;
}

server.listen(3000, () => console.log('server is running at port: 3000'));

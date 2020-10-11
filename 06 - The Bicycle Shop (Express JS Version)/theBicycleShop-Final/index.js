const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const bicycles = require('./data/data.json');

app.get('/', (req, res) => {
  res.render('bicycles', { bicycles });
});

app.get('/bicycle', (req, res) => {
  const { id } = req.query;
  if (id < 0 || id >= bicycles.length) {
    return res.status(404).send('<h1> No bicycle found with this ID. </h1>');
  }
  const bicycle = bicycles.find((b) => b.id === id);
  res.render('overview', { bicycle });
});

app.use((req, res) => {
  res.status(404).send('<h1> 404 </h1> <p> Not Found </p>');
});

app.listen(3000, () => console.log('server is runnning at port: 3000'));

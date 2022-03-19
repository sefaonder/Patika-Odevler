const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add-post', (req, res) => {
  res.render('add_post');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});

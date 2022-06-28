const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');

const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');


const app = express();

//connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

const port = 3000;

app.get('/',postController.gettAllPosts );
app.get('/post/:id',postController.getPost);
app.post('/posts', postController.createPost);
app.put('/post/:id',postController.updatePost);
app.delete('/post/:id',postController.deletePost);

app.get('/about',pageController.getAboutPage);
app.get('/add-post', pageController.getAddPage);
app.get('/post/edit/:id',pageController.getEditPage);

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});

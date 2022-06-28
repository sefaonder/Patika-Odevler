const Post = require("../models/Post");
const fs = require('fs');


exports.gettAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort('-dateCreated');
    res.render('index', {
      posts,
    });
  }

exports.getPost =  async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
}

exports.createPost = async (req, res) => {
  // console.log(req.files.photo)

  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.photo;
  let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name;

  //yüklemesini istediğimiz klasöre move etme
  uploadedImage.mv(uploadPath, async () => {
    await Post.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
  });

  res.redirect('/');
}

//tarayıcı put req simile edemediği için post req simule edildi.
exports.updatePost =  async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/post/${req.params.id}`);
};


exports.deletePost =  async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });

  let deletedImage = __dirname + '/../public' + post.image;
  if (fs.existsSync(deletedImage)) {
    fs.unlinkSync(deletedImage);
  }
  await Post.findByIdAndRemove(req.params.id);

  res.redirect('/');
}

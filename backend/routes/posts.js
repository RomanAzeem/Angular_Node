const express = require('express');
const Post= require('./models/post');

const router =  express.Router();



router.post('', (req, res, next)=>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost=>{
    res.status(201).json({
      message: "Posts added Succesfully",
      postId: createdPost.id
    });
  });
});

router.put('/:id',(req, res, next)=>{
  const post= new Post({
    _id: req.body.id,
    title:req.body.title,
    content:req.body.title
  });
  Post.updateOne({_id:req.params.id},post).then(result=>{
    res.status(200).json({message:"Update Successfull"});
  });
});

app.get('/:id',(req, res, next) =>{
  Post.findById(req.params.id).then(post=>{
    if(post){
      res.status(200).json(post);

    }else{
      res.status(404).json({message: "Post not Found"});
    }
  });
});

app.get('',(req, res, next) => {
  Post.find().then(posts=>{
    res.status(200).json({
      message:"Fetching Post Successfull!",
      posts:posts
    });
  });
});

app.delete('/:id',(req, res, next)=>{
  Post.deleteOne({
    _id:req.params.id
  }).then(result=>{
    console.log(result);
    res.status(200).json({message:"Post Deleted"})
  })

});
module.exports = router;

const router = require("express").Router();

const { addPost, getPosts  }  = require("../controllers/post")


// add new post
router.post("/post", addPost)



// get all post with filter
router.post("/posts", getPosts)




module.exports = router
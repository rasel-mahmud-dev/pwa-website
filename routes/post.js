const {mongoConnect} = require("../services/mongodb");
const {ObjectId} = require("mongodb");

const { parseToken, getToken, createToken} = require("../jwt/jwt");
const Post = require("../models/Post");

const router = require("express").Router();



router.post("/post", async function (req, res){
	
	const { slug, title, summary, isPortfolio, markdown, cover, tags= [] } = req.body
	
	try {
		
		let token = getToken(req)
		if(!token){
			res.status(409).json({message: "Please login first"})
			return;
		}
		let admin = await parseToken(token)
		if(admin && admin.id){
			const database =  await mongoConnect()
			const post = new Post(
				title,
				slug,
				ObjectId(admin.id),
				markdown,
				summary,
				tags
			)
			let doc = await database.collection("posts").insertOne(post)
			if(doc.insertedId){
				post._id = doc.insertedId;
				
				res.status(201).json({
					message: "Post Created",
					post: post
				})
			}
		}
		
	} catch (ex){
		res.status(500).json({message: ex.message})
	} finally {
	
	}
	
})



router.get("/posts", async function (req, res){
	
	try {
		
		const database =  await mongoConnect()
		const posts = await database.collection("posts").find().toArray()
		res.status(200).json({posts})
		
	} catch (ex){
		res.status(500).json({message: ex.message})
	} finally {
	
	}
	
})




module.exports = router
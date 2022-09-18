const {getToken, parseToken} = require("../jwt/jwt");
const {mongoConnect} = require("../services/mongodb");
const Post = require("../models/Post");
const {ObjectId} = require("mongodb");


async function addPost (req, res){
	
	const { slug, title, categories, summary,  markdown,  tags= [] } = req.body
	
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
				tags,
				categories
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
	
}




async function getPosts (req, res){
	
	const {categoryName} = req.body
	let categories = []
	if(categoryName){
		if(categoryName === "HOME"){
			// categories.push([])
		} else {
			categories.push(categoryName)
		}
	}
	
	try {
		
		const database =  await mongoConnect()
		const posts = await database.collection("posts").find(
			{
				$or:  [ categories.length === 0 ? {} : { categories: { $in: categories } }],
			},
			{ title: 0,  _id: 0}
			
	).toArray()
		
		res.status(200).json({posts})
		
	} catch (ex){
		res.status(500).json({message: ex.message})
	} finally {
	
	}
	
	
}




module.exports = { addPost, getPosts }
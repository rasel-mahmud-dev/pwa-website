const {getToken, parseToken, createToken} = require("../jwt/jwt");
const {mongoConnect} = require("../services/mongodb");
const {ObjectId} = require("mongodb");


async function authFetch (req, res){
	
	
	let token = getToken(req)
	if(!token){
		res.status(401).json({ message: "Please Login"})
	}
	
	let client;
	try {
		let data = await parseToken(token)
		if (data) {
			
			const database = await mongoConnect();
			
			let user = await database.collection("users").findOne({_id: ObjectId(data.id)})
			if (!user) {
				return res.status(401).json({message: "Your are not admin"})
			} else {
				delete user.password;
				return res.status(200).json({user: user})
			}
		}
		
	} catch (ex){
		res.status(401).json({message: "Please Login first", info: ex.message})
		
	} finally {
		await client?.close()
	}
	
}




async function login (req, res){
	
	try {
		const {email, password}  = req.body;
		
		const database = await mongoConnect()
		let user = await database.collection("users").findOne({email: email})
		
		if(!user) {
			return res.status(404).json({message: "login fail", user: user})
		}
		
		let token = createToken(user._id, email)
		delete  user.password
		
		res.status(201).json({message: "login success",  token: token, user: user})
		
	} catch (ex){
		res.status(201).json({message: ex.message, user: null})
	}
}




module.exports = { authFetch, login }

const MongoClient = require("mongodb").MongoClient;

const Post  = require("../models/Post");
const User  = require("../models/User");

const COLLECTIONS_NAME = [
	{name: "posts", model: Post},
	{name: "users", model: User}
]

let db

const mongoClient = new MongoClient(process.env.DB_CONN_STRING);
const clientPromise = mongoClient.connect();


async function mongoConnect(){
	return new Promise((async (resolve, reject) => {
		try {
			let database  = (await clientPromise).db(process.env.DB_NAME);
			resolve(database)
		} catch (ex){
			reject(ex)
		}
	}))
	
}

// for initial database connection and create indexes
async function initialConnectionMongodb () {
	try{
		return new Promise((async (resolve, reject) => {
			try {
				let client  = (await clientPromise)
				
				let db = client.db(process.env.DB_NAME);
				
				COLLECTIONS_NAME.forEach((colItem)=>{
					let collection =  db.collection(colItem.name)
					let indexes = colItem.model.indexes;
					for (let indexesKey in indexes) {
						collection.createIndex( [indexesKey], indexes[indexesKey])
					}
				})
				resolve(client)
			} catch (ex){
				reject(ex)
			}
		}))
		
	} catch (ex){
		console.log(ex)
	}
}

module.exports = {
	initialConnectionMongodb,
	mongoConnect,
	db
}
const express = require("express");
const path = require("path");

require("dotenv").config("../.env")

const app = express();


app.use(require("./middleware"))

app.use(require("./routes"));


app.use((_req, _res, next) => {
	const error  = new Error("Resource not fount")
	error.status = 404;
	next(error)
})

app.use((error, _req, res, _next) => {
	if(error.status){
		return res.status(error.status).json({message: error.message})
	}
	
	res.status(500).json({message: "Something were wrong"})
})


module.exports = app;
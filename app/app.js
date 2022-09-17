const express = require("express");
const path = require("path");

const app = express();

// view engine setup
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve('public')));

const categories = [
	{name: "HOME"},
	{name: "HTML"},
	{
		name: "JS ADVANCED",
		subCategories: [
			{name: "JAVASCRIPT ARRAY METHODS"},
			{name: "JAVASCRIPT STRING METHODS"},
			{name: "JAVASCRIPT REGEX"},
		]},
	{name: "CSS"},
	{name: "JAVASCRIPT CORE"},
	{name: "JS BOM"},
	{name: "JS DOM"},
	{name: "WEB API"},
	{name: "SNIPPETS"},
	{name: "GOLANG"}
]


app.use((req, res, next) => {
	res.locals.pageCategory = null
	res.locals.categories = []
	next();
})

app.get("/health", function (_req, res){
	res.status(200).json({message: "Success"})
})


app.get("/api/categories", function (req, res){
	res.send(categories)
})

app.post("/api/login", function (req, res){
	res.send(categories)
})


app.get("*", (req, res) => {
	res.sendFile(path.resolve("public/index.html"))
})


module.exports = app;
const path = require("path");
const router = require("express").Router();



router.use("/api", require("../routes/user"))
router.use("/api", require("../routes/post"))


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

router.get("/health", function (_req, res){
	throw new Error("SDAAAA")
	res.status(200).json({message: "Success"})
})


router.get("/api/categories", function (req, res){
	res.send(categories)
})




router.get("*", (req, res) => {
	res.sendFile(path.resolve("public/index.html"))
})


module.exports = router
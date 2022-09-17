const express = require("express")
const path = require("path")

const app = express()
    // view engine setup
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve('public')));

const categories = [
    {name: "HOME"},
    {name: "ES6"},
    {
        name: "ADVANCED",
        subCategories: [
            {name: "JAVASCRIPT ARRAY METHODS"},
            {name: "JAVASCRIPT STRING METHODS"},
            {name: "JAVASCRIPT REGEX"},
    ]},
    {name: "ES NEXT"},
    {name: "JS BOM"},
    {name: "JS DOM"},
    {name: "WEB API"},
    {name: "SNIPPETS"},
    {name: "TYPESCRIPT"},
    {name: "GOLANG"}
]
 //
 // asdsad
app.use((req, res, next) => {
    res.locals.pageCategory = null
    res.locals.categories = []
    next();
})

app.get("/api/categories", function (req, res){
    res.send(categories)
})


// app.get("/:categoryName", (req, res) => {
//     const { categoryName } = req.params
//     const categories = [
//         { name: "html" },
//         { name: "css" },
//         { name: "js" },
//         { name: "react" },
//         { name: "dom" },
//         { name: "mongodb" },
//     ]
//     res.render('index', { message: "hello from server", categories, pageCategory: categoryName });
// })


app.get("*", (req, res) => {
    const categories = [
        { name: "html" },
        { name: "css" },
        { name: "js" },
        { name: "react" },
        { name: "dom" },
        { name: "mongodb" },
    ]
    res.sendFile(path.resolve("public/index.html"))
    // res.render('index', { message: "hello from server", categories });

})


const PORT = process.env.PORT | 3001

app.listen(PORT, () => console.log(PORT))
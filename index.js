
require("dotenv").config()

const http = require("http")
const app = require("./app/app")


const server = http.createServer(app)


// const PORT = process.env.PORT | 8080
const PORT =  3001


server.listen(PORT, () => console.log(`server is listening on port ${PORT}`))


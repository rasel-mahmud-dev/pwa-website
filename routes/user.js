const router = require("express").Router();

const {login, authFetch} = require("../controllers/user")


// auth fetch handler
router.get("/auth/fetch_auth", authFetch)


// login handler
router.post("/auth/login", login)


module.exports = router
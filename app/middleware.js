const express = require("express");
const path = require("path");




const middleware = [
	express.json(),
	express.static(path.resolve('public'))
]

module.exports = middleware;
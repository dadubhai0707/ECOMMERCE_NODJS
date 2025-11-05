const express = require("express")
const authRouter = express.Router()
const { Register } = require("../../controller/auth/RegisterUser")

authRouter.post("/register", Register)

module.exports = authRouter
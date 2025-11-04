const express = require("express")
require("dotenv").config()
const cookiePars = require("cookie-parser")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookiePars())
app.use(express.static("public"))



module.exports = app
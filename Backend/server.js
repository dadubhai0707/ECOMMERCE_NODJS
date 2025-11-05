const app = require("./app")
const connectDb = require("./config/DB")

connectDb()
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("start", PORT)
})
const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        select: false
    },
},
    {
        timestamps: true
    }
)

const Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin
const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        FullName: {
            FirstName: {
                type: String,
                required: true
            },
            LastName: {
                type: String,
                required: true
            }
        },
        Email: {
            type: String,
            required: true,
            unique: true
        },
        Phone: {
            type: Number,
            required: true
        },
        Password: {
            type: String,
            required: true,
            min: [6, "Password Min Length 6 < 8"],
            max: [8, "Password Min Length 6 < 8"]
        },
        Gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },
        Address: {
            Country: {
                type: String,
                required: true
            },
            State: {
                type: String,
                required: true
            },
            district: {
                type: String,
                require: true
            },
            City: {
                type: String,
                required: true
            },
            FullAddress: {
                type: String,
                required: true
            },
            Pin: {
                type: String,
                required: true
            }
        },
        RefreshToken: {
            type: String
        }
    },
    { timeStamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User
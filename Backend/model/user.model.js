const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema(
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
            max: [8, "Password Min Length 6 < 8"],
            select: false
        },
        Gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },

        Address: [{
            Country: {
                type: String,
                required: true
            },
            State: {
                type: String,
                required: true
            },
            District: {
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
        }],
        RefreshToken: {
            type: String
        }
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) return next()
    this.Password = await bcrypt.hash(this.Password, 12)
    next()
})

userSchema.methods.isPasswordCorrect = async function (Password) {
    return await bcrypt.compare(Password, this.Password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        type: "user"
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}

userSchema.method.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}

const User = mongoose.model("User", userSchema)
module.exports = User
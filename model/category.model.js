const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Description: {
        type: String,
        required: true,
    },
    Slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

categorySchema.pre("save", function (next) {
    // this function for when in Category Name is "Electronic Phone"  the Convert into "electronic-phone"
    if (this.isModified("Name")) {
        this.Slug = this.Name.toLowerCase().replace(/\s+/g, "-");
    }
    next()
})

const Category = mongoose.model("Category", categorySchema)
module.exports = Category
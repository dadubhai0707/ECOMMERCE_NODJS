const mongoose = require("mongoose")
const ApiError = require("../utils/apiError")

const cartSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    Items: [
        {
            Product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            Quantity: {
                type: Number,
                required: true,
                min: [1, "Quantity Not less 0"]
            },
            UnitPrice: {
                type: Number,
                required: true,
            },
            Total: {
                type: Number,
                required: true
            }
        },
    ],
    CartTotal: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    { timestamps: true, }
)


cartSchema.pre("save", function (next) {
    if (this.Items && this.Items.length > 0) {
        for (let i = 0; i < this.Items.length; i++) {
            this.Items[i].Total = Number(this.Items[i].UnitPrice) * Number(this.Items[i].Quantity)
        }
        let Total = 0
        for (let i = 0; i < this.Items.length; i++) {
            Total += this.Items[i].Total;
        }
        this.CartTotal = Total
    } else {
        next(new ApiError(401, "No Item Found"))
    }
    next()
})


const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart
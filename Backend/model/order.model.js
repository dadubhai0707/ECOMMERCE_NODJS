const mongoose = require("mongoose")
const ApiError = require("../utils/apiError")

const orderSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
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
                require: true,
                min: [1, "minimum 1 product buy"]
            },
            UnitPrice: {
                type: Number,
                required: true,
            },
            Total: {
                type: Number,
                required: true
            }
        }
    ],
    Total: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        enum: [
            "Pending",
            "Confirmed",
            "In Process",
            "Shipped",
            "Delivered",
            "Cancelled"
        ],
        default: "Pending"
    },
    PaymentMethod: {
        type: String,
        enum: ["COD", "Online"],
        default: "COD",
    },
    PaymentStatus: {
        type: String,
        enum: ["Unpaid", "Paid", "Refunded"],
        default: "Unpaid",
    }
},
    { timestamps: true }
)

orderSchema.pre("save", function (next) {
    if (this.Items && this.Items.length > 0) {
        let Total = 0
        for (let i = 0; i < this.Items.length; i++) {
            this.Items[0].Total = this.Items[0].UnitPrice * this.Items[0].Quantity
            Total += this.Items[0].Total
        }
    } else {
        next(new ApiError(401, "Product Not Found"))
    }
})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order
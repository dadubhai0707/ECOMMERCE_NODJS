const mongoose = require("mongoose")
const ApiError = require("../utils/apiError")
const productSchema = new mongoose.Schema({
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    Brand: {
        type: String,
        trim: true
    },
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Images: [
        {
            type: String,
        }
    ],
    Slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    Stock: {
        type: Number,
        required: true,
        min: [0, "Stock cannot be negative"]
    },
    PriceDetail: {
        Price: {
            type: Number,
            required: true,
        },
        Discount: {
            type: Number,
            default: 0,
            min: [0, "Discount must be between 0 and 100 "],
            max: [100, "Discount must be between 0 and 100 "]
        },
        Total: {
            type: Number,
            required: true
        }
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
productSchema.pre("save", function (next) {
    // ------------------------------------------------
    if (this.isModified("Name")) {
        this.Slug = this.Name.toLowerCase().replace(/\s+/g, "-");
    }
    // ------------------------------------------------
    if (
        this.PriceDetail &&
        typeof this.PriceDetail.Price === "number" &&
        typeof this.PriceDetail.Discount === "number"
    ) {
        const { Price, Discount } = this.PriceDetail;

        if (Discount < 0 || Discount > 100) {
            return next(new ApiError(400, "Discount must be between 0 and 100"));
        }

        this.PriceDetail.Total = Math.round(Price - (Price * Discount) / 100);
    } else {
        return next(new ApiError(400, "Price and Discount must be numbers"));
    }

    next();
});

const Product = mongoose.model("Product", productSchema)
module.exports = Product
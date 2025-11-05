const mongoose = require("mongoose")
const User = require("../../model/user.model")
const ApiResponse = require("../../utils/apiResponse")
const ApiError = require("../../utils/apiError")
const asyncHandler = require("../../utils/asyncHandle")
const { validationResult } = require("express-validator")
const Register = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    const { FullName, Email, Phone, Password, Gender, Address } = req.body
    console.log(req.body)
    return res.json(new ApiResponse(200, req.body, "Success"))
})

module.exports = {
    Register
}
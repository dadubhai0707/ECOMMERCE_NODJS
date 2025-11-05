const mongoose = require("mongoose")
const User = require("../../model/user.model")
const ApiResponse = require("../../utils/apiResponse")
const ApiError = require("../../utils/apiError")
const asyncHandler = require("../../utils/asyncHandle")

const Register = asyncHandler(async (req, res) => {
    const { FullName, Email, Phone, Password, Gender, Address } = req.body
    console.log(req.body)
    return res.json(new ApiResponse(200, req.body, "Success"))
})

module.exports = {
    Register
}
class ApiError extends Error {
    constructor(status, message = "Somthing Went Wrong", errors = [], stack = "") {
        super(message)
        this.status = status
        this.message = message
        this.errors = errors
        this.success = false
        if (stack) {
            this.stack = stack
        } else {
            errors.captureStackTrace(this, this.stack)
        }
    }
}

module.exports = ApiError
const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");

const errorHandler = (error, req, res, next) => {
	console.log(error);
	if (error instanceof CustomAPIError) {
		return res.status(error.statusCode).json({ message: error.message });
	}
	return res
		.status(StatusCodes.INTERNAL_SERVER_ERROR)
		.json({ message: "Something went wrong!" });
};

module.exports = errorHandler;

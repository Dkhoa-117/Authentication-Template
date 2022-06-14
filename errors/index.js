const UnauthenticatedError = require("./unauthenticated");
const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");

module.exports = {
	UnauthenticatedError,
	BadRequestError,
	CustomAPIError,
};

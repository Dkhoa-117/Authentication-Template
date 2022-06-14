const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
module.exports = {
	auth: async (req, res, next) => {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			throw new UnauthenticatedError("No token provided");
		}
		const token = authHeader.split(" ")[1];
		try {
			const decode = jwt.verify(token, process.env.JWT_SECRET);
			const { _id, username } = decode;
			req.user = { _id, username };
			next();
		} catch (error) {
			throw new UnauthenticatedError("No authorized to access this route");
		}
	},
};

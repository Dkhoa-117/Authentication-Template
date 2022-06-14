const { BadRequestError } = require("../errors");
const { generateToken } = require("../utils/token-generator");

const login = (req, res) => {
	const { username, password } = req.body;
	// mongoose validation
	// Joi
	// check in the controller

	if (!username || !password) {
		throw new BadRequestError("Please provide email and password");
	}

	//just for demo, normally provided by DB!!!!
	const id = new Date().getDate();

	const token = generateToken(id, username);

	res.status(200).json({ message: "login successful", token });
};

const signUp = (req, res) => {
	const { username, password, status } = req.body;
	//check data
	if (!username || !password) {
		throw new BadRequestError("Please provide email and password");
	}
	//save data

	//just for demo, normally provided by DB!!!!
	const id = new Date().getDate();

	const token = generateToken(id, username);

	res.status(200).json({ message: "user created", token });
};

const dashboard = (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);

	res.status(200).json({
		message: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
	});
};
module.exports = { login, signUp, dashboard };

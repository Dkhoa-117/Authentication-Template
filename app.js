require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const main = require("./routes/main");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");

// middleware
app.use(express.json());

// route
app.use("/api/v1", main);

app.use(errorHandler);
app.use(notFound);

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log("app is running!"));

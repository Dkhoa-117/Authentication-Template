const router = require("express").Router();
const { login, signUp, dashboard } = require("../controllers/main");
const { auth } = require("../middlewares/authentication");

router.route("/login").post(login);
router.route("/signup").post(signUp);
router.route("/dashboard").get(auth, dashboard);

module.exports = router;

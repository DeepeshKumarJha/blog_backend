const { Router } = require("express");
const controller = require("../controllers");

const router = Router();

router.post("/login", controller.auth.login);
router.post("/signup", controller.auth.signup);
router.get("/me", controller.auth.me);

module.exports = router;

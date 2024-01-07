const { Router } = require("express");

const authRoutes = require("./AuthRoutes");
const blogRoutes = require("./BlogRoutes");

const router = Router();

router.use("/auth", authRoutes);
router.use("/blog", blogRoutes);

module.exports = router;

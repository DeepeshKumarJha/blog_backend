const { Router } = require("express");

const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.blog.getAllBlogs);
router.get("/:slug", controllers.blog.getBlogBySlug);
router.post("/new", controllers.blog.createBlog);
router.delete("/delete/:id", controllers.blog.deleteBlog);
router.patch("/update/:id", controllers.blog.updateBlog);

module.exports = router;

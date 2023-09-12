const express = require("express");
const {
  readBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const {
  readComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const {
  readMessage,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageController");
const {
  readPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");
const {
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

//blogController routes
router.get("/blog", readBlog);
router.post("/blog", createBlog);
router.put("/blog", updateBlog);
router.delete("/blog", deleteBlog);

//commentController routes
router.get("/comment", readComment);
router.post("/comment", createComment);
router.put("/comment", updateComment);
router.delete("/comment", deleteComment);

//messageController routes
router.get("/message", readMessage);
router.post("/message", createMessage);
router.put("/message", updateMessage);
router.delete("/message", deleteMessage);

//portfolioController routes

router.get("/portfolio", readPortfolio);
router.post("/portfolio", createPortfolio);
router.put("/portfolio", updatePortfolio);
router.delete("/portfolio", deletePortfolio);

//productController routes
router.get("/product", readProduct);
router.post("/product", createProduct);
router.put("/product", updateProduct);
router.delete("/product", deleteProduct);

module.exports = router;

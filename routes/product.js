const { createProduct, productUpdate, getProduct, productDelete, getAllProduct } = require("../controller/Products");
const { verifyTokenAndAdmin } = require("../verifyToken/verifyToken");

const router = require("express").Router();

// Create
router.post("/", verifyTokenAndAdmin, createProduct);

// Update
router.put("/:id", verifyTokenAndAdmin, productUpdate);

// Delete
router.delete("/:id", verifyTokenAndAdmin, productDelete);

// get product
router.get("/find/:id", getProduct);

// get all products
router.get("/", getAllProduct);

module.exports = router
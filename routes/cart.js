const { createCart, updateCart, deleteCart, getCart, getAllCart } = require("../controller/Carts");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../verifyToken/verifyToken");

const router = require("express").Router();


// Create
router.post("/", verifyToken, createCart);

// Update
router.put("/:id", verifyTokenAndAuthorization, updateCart);

// Delete
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

// get user cart
router.get("/find/:userID", verifyTokenAndAuthorization, getCart);

// get all 
router.get("/", verifyTokenAndAdmin, getAllCart);


module.exports = router
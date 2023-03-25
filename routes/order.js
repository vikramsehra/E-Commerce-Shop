const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrder, getMonthlyIncome } = require("../controller/Orders");
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../verifyToken/verifyToken");

const router = require("express").Router();


// Create
router.post("/", verifyToken, createOrder);

// Update
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// Delete
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

// get user order
router.get("/find/:id", verifyTokenAndAuthorization, getOrder);

// get all order
router.get("/", verifyTokenAndAdmin, getAllOrder);

// get monthly income
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome)

module.exports = router
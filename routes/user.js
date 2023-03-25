const { userUpdate, userDelete, getUser, getAllUsers, getUserStats } = require("../controller/Users");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("../verifyToken/verifyToken");

const router = require("express").Router();

// update
router.put("/:id", verifyTokenAndAuthorization, userUpdate);

//delete
router.delete("/:id", verifyTokenAndAuthorization, userDelete);

// get user
router.get("/find/:id", verifyTokenAndAdmin, getUser);

// get all users
router.get("/", verifyTokenAndAdmin, getAllUsers);

// get user stats
router.get("/stats", verifyTokenAndAdmin, getUserStats);



module.exports = router
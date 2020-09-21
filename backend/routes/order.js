const express = require("express");
const router = express.Router();


const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { create } = require("../controllers/order");


router.param("userId", userById);

router.post("/order/create/:userId", requireSignin, isAuth, addOrderToUserHistory, create);

module.exports = router;
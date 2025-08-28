const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const fetchUser = require('../middleware/fetchUser');

router.post("/addtocart", fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
        return res.status(404).send("User not found");
    }
    if (userData.cartData[req.body.itemId] === undefined) {
        userData.cartData[req.body.itemId] = 0;
    }
    userData.cartData[req.body.itemId] += 1;
    const updateResult = await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    if (updateResult) {
        console.log("Cart updated for user:", req.user.id);
    } else {
        console.log("Cart update failed for user:", req.user.id);
    }
    res.send("Added");
});

router.post("/removefromcart", fetchUser, async (req, res) => {
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
        return res.status(404).send("User not found");
    }
    if (userData.cartData[req.body.itemId] === undefined) {
        userData.cartData[req.body.itemId] = 0;
    }
    userData.cartData[req.body.itemId] -= 1;
    const updateResult = await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    if (updateResult) {
        console.log("Cart updated for user:", req.user.id);
    } else {
        console.log("Cart update failed for user:", req.user.id);
    }
    res.send("Deleted");
});

router.post('/getcart', fetchUser, async (req, res) => {
    console.log("getcart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
});

module.exports = router;
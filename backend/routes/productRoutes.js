const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(-8);
    console.log("new collection fetched");
    res.send(newcollection);
});

router.get('/popularinwomen', async (req, res) => {
    let products = await Product.find({ category: "women" });
    let popular = products.slice(0, 4);
    console.log("popular in women fetched");
    res.send(popular);
});

router.post('/addproduct', async (req, res) => {
    const products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({ success: true, name: req.body.name });
});

router.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log('removed');
    res.json({ success: true, name: req.body.name });
});

router.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
});

module.exports = router;
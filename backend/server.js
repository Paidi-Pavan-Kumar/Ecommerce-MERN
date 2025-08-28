const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const app = express();
const port = 4000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

connectToMongo();

app.use('/', require('./routes/productRoutes'));
app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/cartRoutes'));
app.use('/', require('./routes/uploadRoutes'));

app.get("/", (req, res) => {
    res.send("express app is running");
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`server running on port ${port}`);
    } else {
        console.log("error :" + error);
    }
});


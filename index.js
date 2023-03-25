const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
dotenv.config();


// const fileURLToPath = require('url');
// const path = require('path');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connection successful")).catch((err) => {
    console.log(err);
});

app.use(cors())
app.use(express.json());


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute);


// // static files
// app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
// app.use("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "dist", "index.html"))
// })


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})
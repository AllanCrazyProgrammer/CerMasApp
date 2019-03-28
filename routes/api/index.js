const router = require("express").Router();
const exampleRoutes = require("./example");
const userRoutes = require("./user");
const csvRoutes = require("./csv");
const authenticationRoutes = require("./authentication");
const productsRoutes = require("./products");

// Example routes
router.use("/example", exampleRoutes);
router.use("/user", userRoutes);
router.use("/userIndex", csvRoutes);
router.use("/authentication", authenticationRoutes);
router.use("/userIndex/products", productsRoutes);

module.exports = router;

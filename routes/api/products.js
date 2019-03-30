const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
    // .get(productsController.findAll)
    .post(productsController.create);


module.exports = router;

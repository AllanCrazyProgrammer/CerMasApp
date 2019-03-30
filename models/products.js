const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({}, { "strict": false });

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;

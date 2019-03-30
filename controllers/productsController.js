const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Products
      .create(req.body.data)
      .then(function (dbCsvComercial) {
        console.log(dbCsvComercial + "productos")
        return db.User.findOneAndUpdate({ _id: req.body.data.userId }, { $push: { tables: dbCsvComercial._id } }, { new: true });
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        console.log(err);
        res.json(err);
      });
  }
};
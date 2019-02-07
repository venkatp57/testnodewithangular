const express = require('express'),
supplierrepo = require('../repository/supplyrepository');

var router = express.Router();

router.get('/getsuppliers', (req, res) => {

    supplierrepo.getSuppliers().then(function (results) {
        if (results && results.length>0) {
            res.status(200).json({ success: true, data: results });
        }
        else {
            res.status(200).json({ success: false, message: "Suppliers not found" });
        }
    }, function (err) {
        console.log("Error while getting suppliers:", err);
    });
});

module.exports = router;
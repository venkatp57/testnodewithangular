const express = require('express'),
productrepo = require('../repository/productrepository');

var router = express.Router();

router.get('/getallproducts', (req, res) => {

    productrepo.getAllProducts().then(function (results) {
        if (results && results.length>0) {
            res.status(200).json({ success: true, data: results });
        }
        else {
            res.status(200).json({ success: false, message: "Products not found" });
        }
    }, function (err) {
        console.log("Error while getting all products:", err);
    });
});

router.post('/addproduct', (req, res) => {
    let params = req.body;
    productrepo.addProduct(params).then(result => {
        if (result[0] && result[0].Id > 0) {
            res.status(200).json({ success: true, Id: result[0].Id});
        }
        else {
            res.status(200).json({ success: false, message: "Not able to add Product" });
        }
    },
        err => {
            console.log("Error while adding product:", err);
            res.status(500).json(err);
        });
});

router.post('/updateproduct', (req, res) => {
    let params = req.body;

    productrepo.updateProduct(params).then(result => {
        if (result[0] && result[0].returnValue == 1) {
            res.status(200).json({ success: true });
        }
        else {
            res.status(200).json({ success: false, message: "Product not found" });
        }
    },
        err => {
            console.log("Error while updating product:", err);
            res.status(500).json(err);
        });
});

router.post('/deleteproduct', (req, res) => {
    let Id = req.body.Id;
    if (Id) {
        productrepo.deleteProduct(Id).then(result => {
            if (result[0] && result[0].returnValue == 2) {
                res.status(200).json({ success: true });
            }
            else if(result[0] && result[0].returnValue == 1){
                res.status(200).json({ success: false, message: "Product has dependency, not able to deleted" });
            }
            else {
                res.status(200).json({ success: false, message: "Product not found" });
            }
        },
            err => {
                console.log("Error while deleting product:", err);
                res.status(500).json(err);
            });
    }
    else {
        res.status(200).json({ success: false, message: "Product not found" });
    }
});

module.exports = router;
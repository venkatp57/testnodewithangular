const express = require('express'),
orderrepo = require('../repository/orderrepository');

var router = express.Router();


router.get('/getordersbycustomer/:id', (req, res) => {
    var customerId = req.params.id;
    if(customerId){
        orderrepo.getOrdersByCustomer(customerId).then(function (results) {
            if (results && results.length>0) {
                res.status(200).json({ success: true, data: results });
            }
            else {
                res.status(200).json({ success: false, message: "orders not found" });
            }
        }, function (err) {
            console.log("Error while getting orders:", err);
        });
    }
});

router.get('/getorderdetails/:id', (req, res) => {
    var orderId = req.params.id;
    if(orderId){
        orderrepo.getOrderDetails(orderId).then(function (results) {
            if (results && results.length>0) {
                res.status(200).json({ success: true, data: results });
            }
            else {
                res.status(200).json({ success: false, message: "Orders details not found" });
            }
        }, function (err) {
            console.log("Error while getting order details:", err);
        });
    }
});

module.exports = router;
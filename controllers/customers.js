const express = require('express'),
    customerrepo = require('../repository/customerrepository');

var router = express.Router();

router.get('/getallcustomers', (req, res) => {

    customerrepo.getAllCustomers().then(function (results) {
        if (results[0][0]) {
            res.status(200).json({ success: true, data: results[0][0] });
        }
        else {
            res.status(200).json({ success: false, message: "Customers not found" });
        }
    }, function (err) {
        console.log("Error while getting all customers:", err);
    });
});

router.post('/addcustomer', (req, res) => {
    let params = req.body;
    customerrepo.addCustomer(params).then(result => {
        if (result[0] && result[0].returnValue > 0) {
            res.status(200).json({ success: true, Id: result[0].returnValue });
        }
        else {
            res.status(200).json({ success: false, message: "Not able to add Customer" });
        }
    },
        err => {
            console.log("Error while adding customer:", err);
            res.status(500).json(err);
        });
});

router.post('/updatecustomer', (req, res) => {
    let params = req.body;

    customerrepo.updateCustomer(params).then(result => {
        if (result[0] && result[0].returnValue == 1) {
            res.status(200).json({ success: true });
        }
        else {
            res.status(200).json({ success: false, message: "Customer not found" });
        }
    },
        err => {
            console.log("Error while updating customer:", err);
            res.status(500).json(err);
        });
});

router.post('/deletecustomer', (req, res) => {
    let Id = req.body.Id;
    if (Id) {
        customerrepo.deleteCustomer(Id).then(result => {
            if (result[0] && result[0].returnValue == 2) {
                res.status(200).json({ success: true });
            }
            else if (result[0] && result[0].returnValue == 1) {
                res.status(200).json({ success: false, message: "Customer has dependency, not able to deleted" });
            }
            else {
                res.status(200).json({ success: false, message: "Customer not found" });
            }
        },
            err => {
                console.log("Error while deleting customer:", err);
                res.status(500).json(err);
            });
    }
    else {
        res.status(200).json({ success: false, message: "Customer not found" });
    }
});

router.get('/getcustomers', (req, res) => {
    customerrepo.getCustomers().then(function (results) {
        if (results && results.length > 0) {
            res.status(200).json({ success: true, data: results });
        }
        else {
            res.status(200).json({ success: false, message: "Customers not found" });
        }
    }, function (err) {
        console.log("Error while getting customers:", err);
    });
});

module.exports = router;
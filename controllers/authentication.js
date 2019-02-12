const express = require('express'),
db = require('../repository/db'),
config = require('../config/config'),
loginrepo = require('../repository/loginrepository'),
jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/authenticate', (req, res)=>{
    let params = req.body;
    loginrepo.validateLogin(params.username, params.password)
                .then( function( results ) {
                    console.log( results[0]);
                    if(results[0][0][0] && results[0][0][0].UserExists === "true"){
                        let payload = {username: params.username};
                        var token = jwt.sign(payload, config.token);
                        // var token = jwt.sign(payload, config.token, {
                        //     expiresIn: 1440 
                        // });
                        res.status(200).json({success:true, token:token});
                    }
                    else{
                        res.status(200).json({success:false, message:"Wrong username/password. access denied" });
                    }                    
                }, function( err ) {
                        console.log( "Something bad happened:", err );
                        res.status(500).json({success:false, error:err});
                });    
});

router.use(function(req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token, config.token, function(err, decoded){
            if(err){
                return res.status(200).json({ success: false, message: 'Failed to authenticate token.' });
            }
            req.decoded = decoded;
            next();
        });
    }
    else{
        return res.status(403).json({
            success: false, 
            message: 'No token provided.' 
        });
    }
});

module.exports = router;
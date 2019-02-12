var db = require('./db');
var sql = require( "seriate" );

module.exports = {
    validateLogin: (username, password)=>{
        return db.executeStoredProcedure({
            procedure:"sp_validate_login",
            params:{
                username:{
                    type: sql.NVARCHAR,
                    val:username
                },
                password:{
                    type:sql.NVARCHAR,
                    val:password
                }
            }
        });
    }
}
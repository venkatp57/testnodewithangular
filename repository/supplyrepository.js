var db = require('./db');
var sql = require("seriate");

module.exports = {
    getSuppliers:()=>{
        return db.execute({
            query:sql.fromFile('./sql/supplier_get_all_dd.sql')
        });
    }
}
var db = require('./db');
var sql = require("seriate");

module.exports = {
    getAllCustomers: () => {
        return db.executeStoredProcedure({
            procedure: "sp_get_all_customer"
        });
    },
    addCustomer: (obj) => {        
        return db.executeStoredProcedure({
            procedure: "sp_add_customer",
            params: {                    
                firstname: {
                    type: sql.NVARCHAR,
                    val: obj.FirstName
                },
                lastname: {
                    type: sql.NVARCHAR,
                    val: obj.LastName
                },
                city: {
                    type: sql.NVARCHAR,
                    val: obj.City
                },
                country: {
                    type: sql.NVARCHAR,
                    val: obj.Country
                },
                phone: {
                    type: sql.NVARCHAR,
                    val: obj.Phone
                }
            }
        });               
    },
    updateCustomer: (obj) => {
        return db.executeStoredProcedure({
            procedure: "sp_update_customer",
            params: {
                id: {
                    type: sql.Int,
                    val: obj.Id
                },
                firstname: {
                    type: sql.NVARCHAR,
                    val: obj.FirstName
                },
                lastname: {
                    type: sql.NVARCHAR,
                    val: obj.LastName
                },
                city: {
                    type: sql.NVARCHAR,
                    val: obj.City
                },
                country: {
                    type: sql.NVARCHAR,
                    val: obj.Country
                },
                phone: {
                    type: sql.NVARCHAR,
                    val: obj.Phone
                }
            }
        });        
    },
    deleteCustomer: Id => {
        return db.executeStoredProcedure({
            procedure: "sp_delete_customer",
            params: {
                id: {
                    type: sql.Int,
                    val: Id
                }
            }
        });
    },
    getCustomers: ()=>{
        return db.execute({
            query:sql.fromFile('./sql/customer_get_all_dd')
        });
    }
}
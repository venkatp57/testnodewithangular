var db = require('./db');
var sql = require("seriate");

module.exports = {

    getOrdersByCustomer : (customerId) => {
        return db.execute({
            query: sql.fromFile('./sql/order_get_by_customer_dd'),
            params:{
                customerId:{
                    type: sql.INT,
                    val: customerId
                }
            }
        });
    },
    getOrderDetails : (orderId)=>{
       return db.execute({
            query:sql.fromFile('./sql/order_get_details'),
            params:{
                id:{
                    type: sql.INT,
                    val: orderId
                }
            }
        });
    }
}
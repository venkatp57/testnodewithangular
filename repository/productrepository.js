var db = require('./db');
var sql = require("seriate");

module.exports = {
    getAllProducts: () => {
        return db.execute({
            query:sql.fromFile('./sql/product_get_all')
        });        
    },
    addProduct: (obj) => {        
        return db.execute({
            query:sql.fromFile('./sql/product_add'),
            params: {                    
                productName: {
                    type: sql.NVARCHAR,
                    val: obj.ProductName
                },
                supplierId: {
                    type: sql.INT,
                    val: obj.SupplierId
                },
                unitPrice: {
                    type: sql.DECIMAL,
                    val: obj.UnitPrice
                },
                package: {
                    type: sql.NVARCHAR,
                    val: obj.Package
                },
                isDiscontinued: {
                    type: sql.BIT,
                    val: obj.IsDiscontinued
                }
            }
        });               
    },
    updateProduct: (obj) => {
        return db.executeStoredProcedure({
            query:sql.fromFile('./sql/product_update'),
            params: {
                id: {
                    type: sql.INT,
                    val: obj.Id
                },
                productName: {
                    type: sql.NVARCHAR,
                    val: obj.ProductName
                },
                supplierId: {
                    type: sql.INT,
                    val: obj.SupplierId
                },
                unitPrice: {
                    type: sql.DECIMAL,
                    val: obj.UnitPrice
                },
                package: {
                    type: sql.NVARCHAR,
                    val: obj.Package
                },
                isDiscontinued: {
                    type: sql.BIT,
                    val: obj.IsDiscontinued
                }
            }
        });        
    },
    deleteProduct: Id => {
        return db.executeStoredProcedure({
            query:sql.fromFile('./sql/product_delete'),
            params: {
                id: {
                    type: sql.INT,
                    val: Id
                }
            }
        });
    }
}
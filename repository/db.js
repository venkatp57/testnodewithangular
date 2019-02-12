// const sql = require('mssql'),
// config = require('../config/config');

// var db = {};

// db.executeSql = (sqlQuery, callback)=>{
//     sql.connect(config.dbConfig)
//     .then(()=>{
//         var request = new sql.Request();
//         request.query(sqlQuery)
//         .then((result)=>{
//             callback(result);
//             sql.close();
//         })
//         .catch((err)=>{
//             console.log('Error while querying to database : -'+err);
//             callback(null, err);
//             sql.close();
//         })
//     })
//     .catch((err)=>{
//         console.log('Error while connecting to databse : - '+err);
//         callback(null, err);
//     });
// }

// module.exports = db;



var sql = require('seriate'),
config = require('../config/config');

sql.setDefaultConfig(config.dbConfig);

module.exports = {
    executeStoredProcedure: (execObj)=>{
        return sql.execute(execObj);
    },
    execute:(execObj)=>{
        return sql.execute(execObj);
    }
}


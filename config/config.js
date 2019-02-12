var config = {
    expressPort : 3000,
    dbConfig: {
        // user: 'venkat',
        // password: 'venkat',
        // host: 'localhost',
        // database: 'TestDB'

        user: 'venkat',
        password: 'Samplesql@123',
        host: 'venkatsamplesql.database.windows.net',
        database: 'TestDB',
        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    },
    token:'4E79067C-D70F-4776-905C-FFF84171AD04'
}

module.exports = config;
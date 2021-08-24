// //import * as SQLite from 'expo-sqlite'
// // export default db;

// // const db = SQLite.openDatabase("db.db")


// const mssql = require('mssql');
// const config = {
//     server: "DESKTOP-1D3PVAG\\SQLEXPRESS",
//     user: "sa",
//     password: "87896681",
//     options: {
//         encrypt: false,
//         enableArithAbort: true
//     }
// }


// const conn = new mssql.ConnectionPool(config);
// const request = new mssql.Request(conn);
// conn.connect((err) => {
//     if (err) console.log (err);
//     console.log(`${config.server} Connected: ${conn.connected}`);
//     // const query = "INSERT INTO  GroupCiclying.dbo.Usuarios VALUES (@nome, @usuario, @senha)";
    
    
    
//     // request.input("nome", mssql.VarChar, "salsicha").input("usuario", mssql.VarChar, "adrielpvp30").input("senha", mssql.VarChar, "picapau").query(query , function (err, recordset) {

//     //     if (err) {
//     //         console.log(err);
//     //         return;
//     //     }
//     //     console.log(recordset);
//     // });
//     // const query = "SELECT * FROM GroupCiclying.dbo.Usuarios";
    
    
    
//     // request.input("Usuario", mssql.VarChar, "adrielpvp").query(query +" WHERE CONVERT(VARCHAR, [usuario])= @Usuario ", function (err, recordset) {
        
//     //     if (err) {
//     //         console.log(err);
//     //         return;
//     //     }
//     //     console.log(recordset);
//     // });
// });






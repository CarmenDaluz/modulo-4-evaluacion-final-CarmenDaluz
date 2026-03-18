const mysql = require('mysql2/promise'); 

async function getConnection() { 

  const connection = await mysql.createConnection({ 
    host: 'localhost', 
    database: 'data_base_module_4_CD', 
    user: 'root', 
    password: 'c@rm3n', 
  }); 

  await connection.connect(); 
  console.log( 
    `Conexión establecida con la base de datos                             (    identificador=${connection.threadId})` 

  ); 
  return connection;} 


module.exports = {
    getConnection
};
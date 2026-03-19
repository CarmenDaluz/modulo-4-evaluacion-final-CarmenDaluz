const { getConnection }  = require('../database/getConnection.js')
 // PEDIR TODOS LOS PRODUCTOS DE LA API


const getProducts = async (req,res) => {
    let sql = 'SELECT * FROM products'; 
    const connection = await getConnection(); //conexión con BD 
    const [results, fields] = await connection.query(sql); 
    //EJECUTA LA QUERY Y ALMACENA RESULTADOS EN RESULTS 

    res.render('products', { products: results , title: 'Catálogo de libros'}); 
    connection.end(); 


};

module.exports = {
    getProducts
};
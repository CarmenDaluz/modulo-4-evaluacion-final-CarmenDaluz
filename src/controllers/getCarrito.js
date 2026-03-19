const { getConnection }  = require('../database/getConnection.js')

const getCarrito = async (req,res) => { 
         
        let sql = 'SELECT products.name, carrito.cantidad , products.price FROM products INNER JOIN carrito ON products.idProducts = carrito.product_id;'; // Query para hablar con BD
        const connection = await getConnection(); //conexión con BD 
        const [results, fields] = await connection.query(sql); //hacemos pregunta 
        
        res.render('previewCarrito', { carrito: results , title: 'Carrito de compra'}); //Renderizar el ejs con los datos pasados
        connection.end(); 
    }

module.exports = {
    getCarrito
};

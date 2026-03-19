const { getConnection }  = require('../database/getConnection.js')

const postCarrito = async (req,res) => {
    console.log(req.body); 
    const { cantidad, product_id } = req.body;
    let sql = 'INSERT INTO Carrito (cantidad, product_id) VALUES (?, ?);'
    const connection = await getConnection();
    const [results, fields] = await connection.query(sql, [cantidad, product_id]);
    
    res.redirect('/carritoFinal');
    connection.end();

};

module.exports = {
    postCarrito
};


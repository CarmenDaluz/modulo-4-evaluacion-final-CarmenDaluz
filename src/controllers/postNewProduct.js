const { getConnection }  = require('../database/getConnection.js')

const postNewProduct = async (req,res) => {
        console.log(req.body); 
        const { name, author, ISBN, price, category, stock } = req.body;
        let sql = 'INSERT INTO Products (name, author, ISBN, price, category, stock) VALUES (?, ?, ?, ? ,? ,?);'
        const connection = await getConnection();
        const [results, fields] = await connection.query(sql, [name, author, ISBN, price, category, stock]);
        
        res.redirect('/products');
        connection.end();

    };


module.exports = {
    postNewProduct
};
const { getConnection } = require('../database/getConnection');

const deleteCarrito = async (req, res) => {
    console.log(req.body);
  const { product_id } = req.body;
  const connection = await getConnection();
  await connection.query(
    'DELETE FROM Carrito WHERE product_id = ?',
    [product_id]
  );
  res.redirect('/carrito');
};

module.exports = 
    { deleteCarrito 

    };
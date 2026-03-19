
const getNewProduct = (req, res) => {
        res.render('addNewProduct',{ title: 'Añadir Libros'});
    };

module.exports = {
    getNewProduct
};

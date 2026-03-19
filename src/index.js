
const express = require('express'); 
const cors = require('cors'); 
const path = require('path'); 

const { getProducts } = require('./controllers/getProducts.js')
const { postNewProduct } = require('./controllers/postNewProduct.js')
const { postCarrito } = require('./controllers/postCarrito.js')
const { getCarrito } = require('./controllers/getCarrito.js')
const { getNewProduct } = require('./controllers/getNewProduct.js')

    
const app = express(); 
const serverPort = 3000; 

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));//middleware para leer formularios

 //CONFIGURAR EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(serverPort, () => { 
  console.log(`Server listening at htpp://localhost:${serverPort}`); 

}); 



//ENDPOINTS 

    app.get('/', function (req, res) { 
        res.render('landingPage', { title: 'Home mi Librería'}); 

    })
    
    app.get('/products', getProducts);

    app.get('/newProducts', getNewProduct);
    app.post('/newProducts', postNewProduct);
    
    app.post('/carrito', postCarrito);
    app.get('/carrito', getCarrito);

//servidor de estáticos

const staticServerPath = './public'; // En esta carpeta ponemos los ficheros estáticos 
app.use(express.static(staticServerPath)); // LO QUE HACIA GITHUB PAGES 


// not found error
app.use((req, res) => { 

  const notFoundFileRelativePath = '../public/404-not-found.html'; 
  const notFoundFileAbsolutePath = path.join( 
    
    __dirname, 
    notFoundFileRelativePath 
  ); 
  res.status(404).sendFile(notFoundFileAbsolutePath); 

}); 
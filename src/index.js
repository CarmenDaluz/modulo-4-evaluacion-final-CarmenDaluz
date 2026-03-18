//1. Importar módulos NPM que necesito 

const express = require('express'); 
const cors = require('cors'); 
const path = require('path'); 

    //CONEXIÓN CON BASE DE DATOS
    const { getConnection }  = require('./getConnection.js')
   

//2. Crear servidor 

const app = express(); 
const serverPort = 3000; 

//3. Configurar el servidor 

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));//middleware para leer formularios
 //CONFIGURAR EJS
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
//4. Arrancamos el servidor en un puerto 

app.listen(serverPort, () => { 
  console.log(`Server listening at htpp://localhost:${serverPort}`); 

}); 



//5. ENDPOINTS 

    app.get('/', function (req, res) { 
    res.render('landingPage'); 

    })
    // PEDIR TODOS LOS PRODUCTOS DE LA API
    app.get('/products', async (req,res) => { 

        let sql = 'SELECT * FROM products'; 
        const connection = await getConnection(); //conexión con BD 
        const [results, fields] = await connection.query(sql); 
        //EJECUTA LA QUERY Y ALMACENA RESULTADOS EN RESULTS 
        res.render('products', { products: results }); 
        connection.end(); 
    });

    //AÑADIR LIBROS A LA BASE DE DATOS PRODUCTS

    app.get('/newProducts', (req, res) => {
    res.render('addNewProduct');
    });
    app.post('/newProducts', async (req,res) => {
        console.log(req.body); 
        const { name, author, ISBN, price, category, stock } = req.body;
        let sql = 'INSERT INTO Products (name, author, ISBN, price, category, stock) VALUES (?, ?, ?, ? ,? ,?);'
        const connection = await getConnection();
        const [results, fields] = await connection.query(sql, [name, author, ISBN, price, category, stock]);
        
        res.redirect('/');
        connection.end();

    });

    //AÑADIR LIBROS A LA BASE DE DATOS CARRITO

    app.get('/carrito', (req, res) => {
    res.render('addToCarrito');
    });
    app.post('/carrito', async (req,res) => {
        console.log(req.body); 
        const { cantidad, product_id } = req.body;
        let sql = 'INSERT INTO Carrito (cantidad, product_id) VALUES (?, ?);'
        const connection = await getConnection();
        const [results, fields] = await connection.query(sql, [cantidad, product_id]);
        
        res.redirect('/carrito');
        connection.end();

    });

    // PEDIR TODOS LOS LIBROS DE CARRITO
    app.get('/carritoFinal', async (req,res) => { 
         
        let sql = 'SELECT products.name, carrito.cantidad , products.price FROM products INNER JOIN carrito ON products.idProducts = carrito.product_id;'; // Query para hablar con BD
        const connection = await getConnection(); //conexión con BD 
        const [results, fields] = await connection.query(sql); //hacemos pregunta 
        
        res.render('addToCarrito', { carrito: results }); //Renderizar el ejs con los datos pasados
        connection.end(); 
    });

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
# 📚 Bookstore - Tienda Online de Libros

Aplicación web backend de una tienda online de libros donde los usuarios pueden explorar el catálogo, añadir productos nuevos y gestionar un carrito de la compra. 
El total del carrito se calcula dinámicamente multiplicando el precio de cada libro por su cantidad.

---

## 🛠️ Tecnologías utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework de servidor
- **MySQL** - Base de datos relacional
- **mysql2** - Conector de MySQL para Node.js
- **EJS** - Motor de plantillas
- **CORS** - Middleware para gestión de cabeceras
- **Nodemon** - Reinicio automático del servidor en desarrollo

---

## 📁 Estructura del proyecto

```
modulo-4-evaluacion-final/
├── database/
│   └── schema.sql
├── public/
│   ├── css/
│   │   └── styles.css
│   └── img/
│       └── carrito-de-compras.png
├── src/
│   ├── controllers/
│   │   ├── getCarrito.js
│   │   ├── getNewProduct.js
│   │   ├── getProducts.js
│   │   ├── postCarrito.js
|   |   |── postDeleteCarrito.js
│   │   └── postNewProduct.js
│   ├── database/
│   │   └── getConnection.js
│   ├── modules/
│   └── views/
│       ├── partials/
│       ├── addNewProduct.ejs
│       ├── landingPage.ejs
│       ├── previewCarrito.ejs
│       └── products.ejs
├── index.js
└── package.json
```

---

## 🗄️ Base de datos

La base de datos `data_base_module_4_CD` contiene dos tablas:

- **Productos** — almacena los libros con los campos `idProductos`, `name`, `author`, `price`, `category` y `stock`
- **Carrito** — almacena las líneas del carrito con `idCarrito`, `cantidad` y `product_id` (clave foránea a Productos)

---

## 🚀 Instalación y uso

Sigue estos pasos para ejecutar el proyecto en local:

**1. Clona el repositorio**
```bash
git clone https://github.com/CarmenDaluz/modulo-4-evaluacion-final-CarmenDaluz.git
cd modulo-4-evaluacion-final-CarmenDaluz
```

**2. Instala las dependencias**
```bash
npm install
```

**3. Crea la base de datos**

Ejecuta el archivo `database/schema.sql` en MySQL Workbench o desde la terminal:
```bash
mysql -u root -p < database/schema.sql
```

**4. Configura la conexión a la base de datos**

Edita el archivo `src/database/getConnection.js` con tus credenciales de MySQL:
```js
host: 'localhost',
user: 'tu_usuario',
password: 'tu_contraseña',
database: 'data_base_module_4_CD'
```

**5. Arranca el servidor**
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

---

## 👩‍💻 Autora

Carmen Daluz — Ejercicio final Módulo 4 · Adalab
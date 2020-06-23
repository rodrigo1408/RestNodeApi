/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 21/06/2020
 * Author: Rodrigo Barreto
 */

import Products from '../controllers/product.controller';
import Users from '../controllers/user.controller';

export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the bookStore API!',
}));

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota para logout de usuário.
app.post('/api/users', Users.signUp); 
// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
app.post('/api/products', Products.createProduct);
// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
app.get('/api/products', Products.listAllProducts);
// ==> Rota responsável por selecionar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
app.get('/api/products/:productId', Products.findProductById);
// ==> Rota responsável por atualizar 'Product' pelo 'Id': (PUT): localhost: 3000/api/products/:id
app.put('/api/products/:productId', Products.updateProductById);
// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
app.delete('/api/products/:productId', Products.deleteProductById);

};
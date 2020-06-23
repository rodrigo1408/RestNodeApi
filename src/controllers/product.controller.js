import model from '../models'; 

const { Product } = model;

class Products {
    // ==> Método responsável por criar um novo 'Product':
  static createProduct(req, res) {
    const { product_name, quantity, price } = req.body
    const { userId } = req.params
    return Product
      .create({
        product_name,
        quantity,
        price,
        userId
      })
      .then(product => res.status(201).send({
        message: `Your product with the product_name ${product_name} has been created successfully `,
        product
      }))
    }
  // ==> Método responsável por listar todos os 'Products':
  static listAllProducts(req, res) {
    return Product
      .findAll()
      .then(products => res.status(200).send(products));
  }
  // ==> Método responsável por atualizar um 'Product' pelo 'Id':
  static updateProductById(req, res) {
    const { product_name, quantity, price } = req.body
    return Product
      .findById(req.params.productId)
      .then((product) => {
        product.update({
          product_name: product_name || product.product_name,
          quantity: quantity || product.quantity,
          price: price || product.price
        })
        .then((updatedBook) => {
          res.status(200).send({
            message: 'Book updated successfully',
            data: {
              product_name: product_name || updatedBook.product_name,
              quantity: quantity || updatedBook.quantity,
              price: price || updatedBook.price
            }
          })
        })
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  // ==> Método responsável por selecionar 'Product' pelo 'Id':
  static listAllProducts(req, res) {
    return Product
      .findAll()
      .then(products => res.status(200).send(products));
  }
  static findProductById(req, res) {
    //const { product_name, quantity, price } = req.body
    return Product
    .findById(req.params.productId)
    .then(products => res.status(200).send(products));
  }
  // ==> Método responsável por excluir um 'Product' pelo 'Id':
  static deleteProductById(req, res) {
    return Product
      .findById(req.params.productId)
      .then(product => {
        if(!product) {
          return res.status(400).send({
          message: 'product Not Found',
          });
        }
        return product
          .destroy()
          .then(() => res.status(200).send({
            message: 'product successfully deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  }
}

export default Products

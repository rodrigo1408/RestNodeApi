'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.FLOAT,
    userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id',
      as: 'userId',
    }
  }
}, {});
  Product.associate = function(models) {
  // associations can be defined here
  Product.belongsTo(models.User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
};
return Product;
};
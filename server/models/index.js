const { Sequelize } = require('sequelize');
const { sequelize } = require('../db');

const Item = sequelize.define('items', {
  title: Sequelize.STRING,
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    //since we are searching, editing, deleting by slug, these need to be unique
    unique: true,
  },
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  image: Sequelize.STRING,
});

Item.beforeValidate((item) => {
  /*
   * Generate slug
   */

  if (!item.slug) {
    item.slug = item.title.replace(/\s/g, '_').replace(/\W/g, '').toLowerCase();
  }
});

module.exports = {
  db: sequelize,
  Item,
};

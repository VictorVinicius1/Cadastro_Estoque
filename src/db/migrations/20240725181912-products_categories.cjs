'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products_categories', { 
      products_id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"products",key:"id"}
      },
      categories_id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"categories",key:"id"}
      }
  })
  
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products_categories');
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
  }
};

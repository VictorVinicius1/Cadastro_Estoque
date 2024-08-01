'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      cost:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      
      price:{
        type:Sequelize.INTEGER,
        allowNull:false

      },
      buyer:{
        type:Sequelize.STRING,
        allowNull:false
      }
      ,
      status:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      user_id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true,
        references:{model:"users",key:"id"}
      },

})

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

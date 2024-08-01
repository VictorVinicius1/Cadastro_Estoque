'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true
      },
      username:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      status:{
        type:Sequelize.BOOLEAN,
        defaultValue:true,
        allowNull:false
      }
})},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

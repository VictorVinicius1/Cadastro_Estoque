'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', { 
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
     
  })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
  }
};

import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    host:"localhost",
    username:"postgres",
    port:5432,
    password:"m59224i",
    dialect:"postgres",
    database:"estoque"
})
export default sequelize
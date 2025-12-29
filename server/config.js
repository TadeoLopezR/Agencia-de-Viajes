import  Sequelize  from 'sequelize';
import mysql2 from 'mysql2';

const sequelize = new Sequelize('agenciaviajes', 'root', 'carajo21', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2
});

export default sequelize;   
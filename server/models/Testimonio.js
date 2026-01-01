import { DataTypes } from "sequelize";
import DB from "../config.js";

const testimoniales = DB.define('testimoniales', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mensaje: {
  type: DataTypes.TEXT,
    allowNull: false
},
}, {
  timestamps: false, // Crea createdAt y updatedAt
  tableName: 'testimoniales'
});

export default testimoniales
import { DataTypes } from "sequelize";
import DB from "../config.js";

const testimoniales = DB.define('testimoniales', {
  nombre: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  mensaje: {
  type: DataTypes.TEXT,
},
}, {
  timestamps: false, // Crea createdAt y updatedAt
  tableName: 'testimoniales'
});

export default testimoniales
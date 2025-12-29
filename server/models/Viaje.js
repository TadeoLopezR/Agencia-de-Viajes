import { DataTypes } from "sequelize";
import DB from "../config.js";

const Viaje = DB.define('Viaje', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fechaIda: {
  type: DataTypes.DATE,
  allowNull: true,
  field: 'fecha_ida'
},
fechaVuelta: {
  type: DataTypes.DATE,
  allowNull: true,
  field: 'fecha_vuelta'
},
img: {
  type: DataTypes.STRING,
  allowNull: true,
  field: 'imagen'
},
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  disponibles: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false, // Crea createdAt y updatedAt
  tableName: 'viajes'
});

export default Viaje
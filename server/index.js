import express from "express";
import  cors  from "cors";
import  sequelize  from "./config.js";
import  getViajes  from "./controllers/viajeController.js";


const app = express();
const PORT = 3000;
app.use(cors());   

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa');
    return sequelize.sync(); // sincronizanr los modelos
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });

app.get('/api/viajes', getViajes);

app.get('/api/testimoniales', (req, res) => {
  const SQL_QUERY = 'SELECT * FROM testimoniales';
  sequelize.query(SQL_QUERY, (err, resultado) => {
    if (err) {
      console.error('Error en la consulta:', err.message);
      return res.status(500).json({ error: 'Error al obtener datos' });
    }
    res.json(resultado);
  });
});

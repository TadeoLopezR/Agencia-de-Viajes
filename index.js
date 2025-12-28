import express from "express";
import mysql2 from "mysql2";
import  cors  from "cors";




const app = express();
const PORT = 3000;
app.use(cors());   

const DB = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'carajo21',
  database: 'agenciaviajes'
});

DB.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err.message); // Muestra el mensaje de error
    return;
  }
  console.log('Conexión exitosa');
});

app.get('/api/viajes', (req, res) => {
  const SQL_QUERY = 'SELECT * FROM viajes';
  DB.query(SQL_QUERY, (err, resultado) => {
    if (err) {
      console.error('Error en la consulta:', err.message);
      return res.status(500).json({ error: 'Error al obtener datos' });
    }
    res.json(resultado);
  });
});

app.get('/api/testimoniales', (req, res) => {
  const SQL_QUERY = 'SELECT * FROM testimoniales';
  DB.query(SQL_QUERY, (err, resultado) => {
    if (err) {
      console.error('Error en la consulta:', err.message);
      return res.status(500).json({ error: 'Error al obtener datos' });
    }
    res.json(resultado);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor abierto en puerto ${PORT}`);
});   
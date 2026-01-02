import express from "express";
import  cors  from "cors";
import  sequelize  from "./config.js";
import  {getViajes , getSlug , getTestimoniales , postTestimoniales}  from "./controllers/Controller.js";



const app = express();
const PORT = 3000;
app.use(express.json());
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

app.get('/api/viajes/:slug', getSlug);

app.get('/api/testimoniales', getTestimoniales);

app.post('/api/testimoniales', postTestimoniales);

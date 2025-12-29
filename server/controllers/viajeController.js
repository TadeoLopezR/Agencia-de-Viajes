import  Viaje  from "../models/Viaje.js";

const getViajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll();
    res.json(viajes)
  } catch (err) {
    res.status(500).json({err:'Error al obtener datos'})
  }
};   

export default getViajes
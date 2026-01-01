import  Viaje  from "../models/Viaje.js";
import testimoniales from "../models/Testimonio.js";

export const getViajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll();
    res.json(viajes)
  } catch (err) {
    res.status(500).json({err:'Error al obtener datos'})
  }
};

export const getSlug = async (req, res) => {
  try {
    const viaje = await Viaje.findOne({ where: { slug: req.params.slug } });
    if (!viaje) return res.status(404).json({ error: 'No encontrado' });
    res.json(viaje);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener datos' });
  }
};

export const getTestimoniales = async (req, res) => {
    try {
    const testimonio = await testimoniales.findAll();
    res.json(testimonio)
  } catch (err) {
    res.status(500).json({err:'Error al obtener datos'})
  }
};
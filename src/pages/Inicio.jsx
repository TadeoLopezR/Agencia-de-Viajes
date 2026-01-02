import { useState, useEffect } from 'react';
import ListaViajes from "./components/ListaViajes";
import ListaTestimoniales from "./components/ListaTestimoniales";



function Inicio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/viajes')
          .then(res => res.json())
          .then(data => setData(data));
    }, []);

    const [comentarios, setComentario] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/testimoniales')
          .then(res => res.json())
          .then(comentarios => setComentario(comentarios));
    }, []);
  return (
    <>
      <div className="slider">
        <em>Aventura</em>
        <h1>Rio de Janeiro</h1>
      </div>
      <main className="container mt-5">
        <h2 className="text-center mb-5">Sobre Nosotros</h2>
        <div className="row mb-5">
            <div className="col-md-6">
                <p>Phasellus sit amet varius leo, in placerat enim. Curabitur urna nunc, Quisque lectus velit, dignissim quis hendrerit ut, aliquet vel leo. In hac habitasse platea dictumst. Sed non maximus ipsum. Sed ac porttitor eros. Cras dolor felis, tempus non fringilla at, imperdiet eget enim. Aliquam ac orci nec nibh lacinia pulvinar a eu nisi. Mauris nec ex elit. Nullam sodales mollis tellus sit amet maximus. Mauris eleifend finibus lorem, eget aliquet magna malesuada tincidunt. Aenean consectetur laoreet lacinia.</p>
                <p>Aliquam erat volutpat. Ut vestibulum molestie facilisis. Nam eget feugiat libero. Fusce aliquam nibh odio, eu rutrum dolor sodales et. Nunc quis risus sapien. Aenean sed eros in ligula feugiat malesuada ac eu nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ultrices lorem in porttitor faucibus. Integer non turpis nec purus accumsan efficitur vel vel magna. Sed posuere, ante et bibendum fermentum, lorem mauris malesuada felis, varius feugiat massa quam at augue. Donec finibus, sem ac finibus porta, felis augue egestas erat, vel finibus nulla sapien eget est. Donec ullamcorper, lacus eget consequat mollis, tellus metus eleifend orci, aliquam elementum magna purus ut dolor. Curabitur risus justo, ultricies in quam nec, venenatis accumsan felis. Maecenas ac leo tellus.</p>
            </div>
            <div className="col-md-6">
                <img src="/public/inicio_nosotros.jpg" alt="Imagen nosotros" className="img-fluid"/>
            </div>
        </div>
        <ListaViajes data={data}/>
      </main>
      <div className='descuento'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='contenido'>
                        <h3>5% de Descuento</h3>
                        <p className='titulo'>Viaje a Canada</p>
                        <p className='fecha'>20 de Marzo 2026</p>
                        <p className='precio'> 2.500 $</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='container'>
        <h2 className='mt-5 text-center'>Testimoniales</h2>
        <ListaTestimoniales data={comentarios}/>
      </div>
    </>
  );
}
export default Inicio
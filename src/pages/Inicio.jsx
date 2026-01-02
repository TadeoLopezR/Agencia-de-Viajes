import { useState, useEffect } from 'react';


function Inicio() {
    const [data, setData] = useState([]);
        useEffect(() => {
        fetch('http://localhost:3000/api/viajes')
          .then(res => res.json())
          .then(data => setData(data));
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
        
        <div className='row proximos-viajes'>
                {data.slice(0, 3).map((viaje) => (
                <div className='col-md-6 col-lg-4 mb-4' key={viaje.id}>
                        <div className='card'>
                           <img src={`/public/destinos_${viaje.img}.jpg`}  className='card-img-top' alt={viaje.titulo} />
                           <div className='card-body'> 
                                <h1>{viaje.titulo}</h1>
                                <p>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2d55" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                                        <path d="M16 3v4" />
                                        <path d="M8 3v4" />
                                        <path d="M4 11h16" />
                                        <path d="M7 14h.013" />
                                        <path d="M10.01 14h.005" />
                                        <path d="M13.01 14h.005" />
                                        <path d="M16.015 14h.005" />
                                        <path d="M13.015 17h.005" />
                                        <path d="M7.01 17h.005" />
                                        <path d="M10.01 17h.005" />
                                    </svg>
                                    {viaje.fechaIda} - {viaje.fechaVuelta}
                                </p>
                                <p>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2d55" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    {viaje.disponibles} Disponibles  
                                </p>
                                <p>{viaje.descripcion.substring(0, 100)}...</p>
                                <a href={`Viajes/${viaje.slug}`} className='btn btn-success btn-block'>Mas informacion</a>
                            </div>
                        </div>
                </div>))}
            </div>
      </main>
    </>
  );
}
export default Inicio
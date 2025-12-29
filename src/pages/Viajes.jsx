import { useState, useEffect } from 'react';


function Viajes() {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3000/api/viajes')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
    return(
        <main className='container mt-5'>
            <h1 className='mt-5 text-center'>Proximos Viajes</h1>
            <div className='row proximos-viajes'>
                {data.map((viaje) => (
                <div className='col-md-6 col-lg-4 mb-4' key={viaje.id}>
                        <div className='card'>
                           <img src={`/public/destinos_${viaje.img}.jpg`}  className='card-img-top' alt={viaje.titulo} />
                           <div className='card-body'> 
                            <h1>{viaje.titulo}</h1>
                            <p>Precio: {viaje.precio}</p>
                            <p>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2d55" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"                              >
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
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2d55" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
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
    )
}

export default Viajes
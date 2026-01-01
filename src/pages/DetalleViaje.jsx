import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetalleViaje() {
  const { slug } = useParams();
  const [viaje, setViaje] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/viajes/${slug}`)
      .then(res => res.json())
      .then(data => setViaje(data));
  }, [slug]);

  if (!viaje) return <p>Cargando...</p>;

  return (
    <main className="container mt-5">
        <div className='row'>
            <div className='col-md-5'>
               <img src={`/public/destinos_${viaje.img}_ln.jpg`}  className='img-fluid' alt={viaje.titulo} />

            </div>
            <div className='col-md-7'>
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
                        <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z" />
                    </svg>
                    {viaje.precio} Dolares
                </p>
                <p>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff2d55" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    {viaje.disponibles} Disponibles  
                </p>
                <p>{viaje.descripcion}</p>
            </div>
        </div>
    </main>
  );
}

export default DetalleViaje
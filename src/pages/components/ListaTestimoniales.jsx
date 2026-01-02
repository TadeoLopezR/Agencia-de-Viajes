import { useLocation } from 'react-router-dom';

function ListaTestimoniales({ data }) {
    const location = useLocation();
    const limite = location.pathname === '/' ? 3 : data.length;
    const testimonios = data.slice(0, limite);

    return(
           <div className='row testimoniales'> 
                {testimonios.map((testimonio) => (
                <div className='col-md-6 col-lg-4 mb-4' key={testimonio.id}>
                    <div className='card'>
                        <div className='card-body'>
                            <blockquote className='blockquote'>
                                <p className='mb-0'>{testimonio.mensaje}</p>
                            </blockquote>
                            <footer className='blockquote-footer'>{testimonio.nombre}</footer>   
                        </div>
                    </div>
                </div>))}
            </div>
            )}

export default ListaTestimoniales
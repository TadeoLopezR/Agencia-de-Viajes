import { useState, useEffect } from 'react';

function Testimoniales() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/testimoniales')
          .then(res => res.json())
          .then(data => setData(data));
    }, []);

    //Formulario 

    const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

    const handleChange  = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
       
        
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/testimoniales', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            alert('Mensaje enviado');
            setFormData({ nombre: '', correo: '', mensaje: '' });
        })
        .catch(error => console.error('Error:', error));
    };
    

    return(
         <main className='container mt-5'>
            <h1 className='mt-5 text-center'>Testimonios</h1>
            <blockquote className='text-center'>Lee sobre nuestros Clientes y sus <span>Experiencias</span></blockquote>

            <div className='row testimoniales'> 
                {data.map((testimonio) => (
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


            <div className=''>
                <h2 className='d-block w-100 text-center'>Agrega Testimonio</h2>
                    <div className='row justify-content-center '>
                        <div className='col-md-8'>
                            <form onSubmit={handleSubmit} >
                                <div className='form-group'>
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input type="text" id='nombre' value={formData.nombre}  onChange={handleChange} placeholder='Tu nombre' name='nombre' className='form-control' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="correo">Correo Electronico:</label>
                                    <input type="text" id='nombre' value={formData.correo} onChange={handleChange} placeholder='Tu correo' name='correo' className='form-control' required />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="mensaje">Mensaje:</label>
                                    <textarea name="mensaje" id="mensaje" value={formData.mensaje} onChange={handleChange} className='form-control' placeholder='Tu Mensaje' rows={3} required ></textarea>
                                </div>
                                <input className='btn btn-success btn-block' type="submit" />
                            </form>
                        </div>
                    </div>
            </div>
            
            
            
            
        </main>
    )
}

export default Testimoniales
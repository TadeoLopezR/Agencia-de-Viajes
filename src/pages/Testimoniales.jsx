import { useState, useEffect } from 'react';

function Testimoniales() {
     const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/testimoniales')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

    return(
         <main className='container mt-5'>
            <h1 className='mt-5 text-center'>Testimonios</h1>
            <h2 className='d-block w-100 text-center'>Agrega Testimonio</h2>
            <div className='row justify-concent-center'>
                <div className='col-md-8'>
                    <form method='POST'>
                        
                    </form>

                </div>

            </div>
            <div className='row'>
                {data.map((item) => (
                <div className='col-md-6 col-lg-4 mb-4' key={item.id}>
                    
                       
                       
                </div>))}
            </div>
            
        </main>
    )
}

export default Testimoniales
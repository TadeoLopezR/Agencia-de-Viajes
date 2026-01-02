import { useState, useEffect } from 'react';
import ListaViajes from "./components/ListaViajes";


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
             <ListaViajes data={data}/>
            
        </main>
    )
}

export default Viajes
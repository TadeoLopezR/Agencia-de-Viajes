import { useState, useEffect } from 'react';

function Inicio() {
     const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/testimoniales')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

    return(
        <main className="container mt-5">
            <div>
                {data.map(item => (<p key={item.id}>{item.nombre}</p>))}
            </div>
            <p>HOLa Inicio</p>
        </main>
    )
}

export default Inicio
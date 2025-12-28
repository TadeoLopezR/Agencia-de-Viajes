import { useState, useEffect } from 'react';

function Viajes() {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3000/api/viajes')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
    return(
        <main className="container mt-5">
            <h1>HOLa ViAJES</h1>
            <div>
                {data.map(({ id, ...rest }) => (
            <div key={id}>
            {Object.entries(rest).map(([key, value]) => (
            <p><strong>{key}:</strong> {value}</p>
          ))}
        </div>
        ))}
    </div>
            
        </main>
    )
}

export default Viajes
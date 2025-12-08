// App.jsx
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Viajes from './pages/Viajes';
import Testimoniales from './pages/Testimoniales';
import MainLayout from './pages/layout/MainLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Viajes" element={<Viajes />} />
        <Route path="/Testimoniales" element={<Testimoniales />} />
      </Route>
    </Routes>
  );
}

export default App;   
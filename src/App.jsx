// App.jsx
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Viajes from './pages/Viajes';
import Testimoniales from './pages/Testimoniales';
import MainLayout from './pages/layout/MainLayout';
import DetalleViaje from './pages/DetalleViaje';
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Viajes" element={<Viajes />} />
        <Route path="/Viajes/:slug" element={<DetalleViaje />} />
        <Route path="/Testimoniales" element={<Testimoniales />} />
      </Route>
    </Routes>
    </ErrorBoundary>
    
  );
}

export default App;   
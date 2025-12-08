import imagen from "../../assets/logo.svg";
import '../../css/bootstrap.css';
import '../../css/style.css';   


function Header() {
    return(
        <header>
            <div className="navegacion">
                <div className="container">
                    <div className="row justify-content-center justify-content-md-between align-items-center py-4">
                        <div className="col-md-4 col-6">
                            <a href="/">
                                <img src={imagen} alt="Imagen inicio" />
                            </a>
                        </div>
                        <div className="col-md-8">
                            <nav className="mt-5 mt-md-0 nav justify-content-center justify-content-md-end">
                                <a href="/" className="nav-link">Inicio</a>
                                <a href="/Nosotros" className="nav-link">Nosotros</a>
                                <a href="/Viajes" className="nav-link">Viajes</a>
                                <a href="/Testimoniales" className="nav-link">Testimoniales</a>
                            </nav>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </header>
    )
}

export default Header
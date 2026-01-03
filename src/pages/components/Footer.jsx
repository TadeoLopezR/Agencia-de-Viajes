
function Footer() {

    const year = new Date().getFullYear()
    return(
        <footer>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <nav className="nav footer justify-content-center justify-contentd-md-start">
                            <a href="/" className="nav-link">Inicio</a>
                            <a href="/Nosotros" className="nav-link">Nosotros</a>
                            <a href="/Viajes" className="nav-link">Viajes</a>
                            <a href="/Testimoniales" className="nav-link">Testimoniales</a>
                        </nav>
                    </div>
                    <div className="col">
                        <p className="copyright text-center text-md-right">
                           | Todos los derechos reservados {year}
                        </p>
                            
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
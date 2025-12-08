import imagenNosotros from "../assets/nosotros.jpg";
import icono_seguridad from "../assets/icono_seguridad.svg";
import icono_destinos from "../assets/icono_destinos.svg";
import icono_precios from "../assets/icono_precios.svg";

function Nosotros() {
    return(
        <main className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={imagenNosotros} className="img-fluid" alt="img Nosotros" />
                </div>
                <div className="col-md-7">
                    <h1>Nosotros</h1>
                    <blockquote>Quisque convallis justo pulvinar auctor ornare. Lorem ipsum dolor sit amet, consect
                        etur adipiscing elit. Nam eu efficitur nisl, in facilisis nisl. Sed fermentum, arcu eu b
                        landit tempus, lectus nunc accumsan ipsum, et aliquam ligula felis vitae orci. Etiam imperdiet magna in risus con
                        sequat, non hendrerit nunc facilisis.
                    </blockquote>

                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec condimentum iaculis 
                        tristique. Ut nec vestibulum mi. Nunc ipsum lectus, faucibus sagittis nibh sit amet, pharetra pulvinar ante. 
                        Pellentesque vitae pulvinar felis. Mauris quis ipsum eu sapien porttitor ornare. Sed vitae iaculis purus.
                    </p>
                    <p>
                        Donec finibus, augue ac congue faucibus, quam tellus commodo lacus, et placerat mi magna et erat. Duis nec sem
                        at felis pellentesque feugiat dictum ac nunc. Nam rutrum imperdiet vestibulum. Donec vestibulum urna sit amet 
                        finibus rutrum. In varius sit amet elit id feugiat.
                    </p>
                </div>
            </div>
                <div className="listado-iconos">
                    <div className="container mt-5 py-5 text-center">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={icono_seguridad} alt="icono_seguridad" className="img-fluid mb-4"/>
                                <h2 className="mb-4">Seguridad</h2>
                                <p>Donec vestibulum urna sit amet Donec vestibulum urna sit amet in varius sit amet elit id feugiat.finibus rutrum. In varius sit amet elit id feugiat.</p>
                            </div>
                            <div className="col-md-4">
                                <img src={icono_destinos} alt="icono_destinos" className="img-fluid mb-4"/>
                                <h2 className="mb-4">Seguridad</h2>
                                <p>Donec vestibulum urna sit amet Donec vestibulum urna sit amet in varius sit amet elit id feugiat.finibus rutrum. In varius sit amet elit id feugiat.</p>
                            </div>
                            <div className="col-md-4">
                                <img src={icono_precios} alt="icono_precios" className="img-fluid mb-4"/>
                                <h2 className="mb-4">Seguridad</h2>
                                <p>Donec vestibulum urna sit amet Donec vestibulum urna sit amet in varius sit amet elit id feugiat.finibus rutrum. In varius sit amet elit id feugiat.</p>
                            </div>
                        </div>
                    </div>

                </div>
           
        </main>
    )
}

export default Nosotros
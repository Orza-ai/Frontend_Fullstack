import { useState } from "react"

const Header = () => {
const [isOpen, setIsOpen] = useState(false)

return(
<header>
    <nav>
    <div>
        <div>
            <a>
                <img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png 2x"
                alt="Slack"
                className="slack-logo-black"/>

                <img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png" srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png 2x" 
                alt="Slack"
                className="slack-logo-white"/>
            </a>
        </div>
        <nav>
            <ul className="extnav-level__0">
                <li>
                    <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                        <span>Funciones</span>
                    </button>
                    <ul className="extnav-level__1">
                        <li>
                            <div className="nav_parent_label_l1">
                                COLABORACIÓN
                            </div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Canales</span>
                                        </div>
                                        <span className="nav-link-sublabel">Organizar equipos y el trabajo</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Slack Connect</span>
                                        </div>
                                        <span className="nav-link-sublabel">Trabajar con socios externos</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Mensajería</span>
                                        </div>
                                        <span className="nav-link-sublabel">Conversar con tu equipo</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Juntas</span>
                                        </div>
                                        <span className="nav-link-sublabel">Reuniones con audio y video</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Clips</span>
                                        </div>
                                        <span className="nav-link-sublabel">Grabar y compartir actualizaciones</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="nav_parent_label_l1">
                                ADMINISTRACIÓN DE PROYECTOS
                            </div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Plantillas</span>
                                        </div>
                                        <span className="nav-link-sublabel">Comienza cualquier tarea rápidamente</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Canvas</span>
                                        </div>
                                        <span className="nav-link-sublabel">Crear documentos enriquecidos y flexibles</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Listas</span>
                                        </div>
                                        <span className="nav-link-sublabel">Organiza, administra y haz seguimiento de los proyectos</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Buscar</span>
                                        </div>
                                        <span className="nav-link-sublabel">Buscar conocimiento compartido</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Uso compartido de archivos</span>
                                        </div>
                                        <span className="nav-link-sublabel">Traer archivos al flujo de trabajo</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="nav_parent_label_l1">INTEGRACIONES</div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Generador de flujos de trabajo</span>
                                        </div>
                                        <span className="nav-link-sublabel">Automatizar tareas diarias</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Apps e integraciones</span>
                                        </div>
                                        <span className="nav-link-sublabel">Conecta tus herramientas con Slack</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Slack y Salesforce</span>
                                        </div>
                                        <span className="nav-link-sublabel">Reúne los conocimientos de CRM en Slack</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="nav_parent_label_l1">
                                INTELIGENCIA
                            </div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>IA de Slack</span>
                                        </div>
                                        <span className="nav-link-sublabel">Ahorra tiempo y trabaja de forma más inteligente con IA potente y sencilla</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Agentforce</span>
                                        </div>
                                        <span className="nav-link-sublabel">Potencia tu equipo completo en Slack con agentye basados en IA</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="nav_parent_label_l1">
                                PLATAFORMA EMPRESARIAL
                            </div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Seguridad</span>
                                        </div>
                                        <span className="nav-link-sublabel">Proteger datos, garantizar el cumplimiento</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Administración de claves Enterprise</span>
                                        </div>
                                        <span className="nav-link-sublabel">Momitorear y revocar accesos</span>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Atlas de Slack</span>
                                        </div>
                                        <span className="nav-link-sublabel">Ver perfiles y organigramas enriquecidos</span> 
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <button className="dropdown-button">
                        <span>Soluciones</span>
                    </button>
                    <ul className="extnav-level__1">
                        <li>
                            <div className="nav_parent_label_l1">
                                POR DEPARTAMENTO
                            </div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Ingeniería</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>TI</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Atención al Cliente</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Ventas</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Administración de Proyectos</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Marketing</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Recursos Humanos</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Seguridad</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="nav_parent_label_l1">
                                POR SECTOR
                            </div>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Fabricación, automóviles y energía</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Tecnología</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Multimedia</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Pequeña Empresa</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Servicios Financieros</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Venta Minorista</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Educación</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Salud y Ciencias Biológicas</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="nav_parent_label_l1">
                        <span>Empresa</span>
                    </a>
                </li>
                <li>
                    <button className="dropdown-button">
                        <span>Recursos</span>
                    </button>
                    <ul className="extnav-level__1">
                        <li>
                            <ul className="extnav-level__2">
                                <li className="nav-link-l3">
                                    <a>
                                        <div className="nav-link-label">
                                            <span>Recursos</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="button-container">
                <a>
                    Hablar con Ventas
                </a>
            </div>
            <a>
                <span>Crear un nuevo espacio de trabajo</span>
            </a>
        </nav>
    </div>
    </nav>
</header>
)}

export default Header
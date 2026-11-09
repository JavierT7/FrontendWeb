export function Sidebar({vistaActual, setVistaActual}){
    return(
      <div className="d-flex flex-column p-3 text-white bg-dark rounded-3 w-100 shadow-sm">
        <a href="/" className="d-flex align-items-center mb-3 text-white text-decoration-none">
          <span className="fs-5 fw-bold">Panel de Control</span>
        </a>
        <hr className="my-2"/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <button onClick={() => setVistaActual('productos')} className="nav-link text-white">
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => setVistaActual('pedidos')} className="nav-link text-white">
              Pedidos
            </button>
          </li>
          <li>
            <button onClick={() => setVistaActual('perfil')} className="nav-link text-white">
              Perfil
            </button>
          </li>
        </ul>
      </div>
    )
}
export function Producto({ nombre, precio, categoria = "Electrónica", image }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bold text-dark mb-1">{nombre}</h5>

            <div className="row">
              <div className="col">
                <img src={image} className="img" style={{width: 100, height: 100}}/>
              </div>

              <div className="col">
                <p className="card-text text-muted small">
                    <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                        {categoria}
                    </span>
                  Producto disponible.
                </p>
              </div>
            </div>

          </div>

          <div className="d-flex align-items-center justify-content-between">
            <span className="fs-5 fw-bold text-success">{precio}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
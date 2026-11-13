export function Navbar({email}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://library.livecanvas.com/sections/">
                    <img className="img-fluid" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="48px" height="48px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_lc" aria-controls="nav_lc" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav_lc">
                    <ul className="navbar-nav my-3 my-lg-0 ms-lg-3 me-auto">
                        <li className="nav-item me-4"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item me-4"><a className="nav-link" href="#">About us</a></li>
                        <li className="nav-item me-4"><a className="nav-link" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                    </ul>
                    <div><h1>{email}</h1></div>
                    {/*<div><a className="btn btn-outline-secondary me-2" href="#">Sign In</a><a className="btn btn-primary" href="#">Sign Up</a></div>*/}
                </div>
            </div>
        </nav>
    )
}
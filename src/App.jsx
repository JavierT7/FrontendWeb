import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Login } from './components/Login';

function App() {
  const [ token , setToken ] = useState(localStorage.getItem('token'));
  const [vistaActual, setVistaActual] = useState('productos'); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    setToken(null);
  }

  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-light">
        {token ? (
            <>
              <Navbar/>
              <div className="container-fluid px-4 flex-grow-1 my-4">
                <div className="row g-4">
                  <aside className="col-md-3 col-lg-2">
                    <Sidebar vistaActual={vistaActual} setVistaActual={setVistaActual}/>
                    <button onClick={() => handleLogout()} className='btn btn-secondary btn-sm w-100 mt-2'>Logout</button>

                  </aside>
                  <main className="col-md-9 col-lg-10">
                    { vistaActual === 'productos' && (
                      <MainContent />
                    )}

                    { vistaActual === 'perfil' && (
                     <div><span>MODULO PARA PERFIL EN CONSTRUCCIÓN</span></div>
                    )}

                    { vistaActual === 'pedidos' && (
                     <div><span>MODULO PARA PEDIDOS EN CONSTRUCCIÓN</span></div>
                    )}
                  </main>
                </div>
              </div>
              <Footer />
            </>
          ) : (
            <Login onLoginSuccess={(newToken) => setToken(newToken)}/>
          )
        }
      </div>
    </>
  )
}

export default App

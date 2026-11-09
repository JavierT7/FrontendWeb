import { Producto } from "./Producto"
import { useState, useEffect } from 'react';
import { queryGraphQL } from "../services/api";

export function MainContent(){

    const [busqueda, setBusqueda] = useState('');
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState("cargando...");

    useEffect(()=>{
        setCargando(true);
        
        console.log(busqueda);
    }, [busqueda]);

    const GET_DATA = `
      query {
          characters {
            results{
              name,
              species,
              gender,
              image
            }
          }
        }
    `;

    useEffect(()=>{
      setCargando(true);
      queryGraphQL(GET_DATA).then(data => {
        const mapeados = data.characters.results.map(item => ({
          id: item.id,
          nombre: item.name,
          precio: item.species,
          categoria: item.gender,
          imagen: item.image
        }));
        setProductos(mapeados);
        setCargando(false);
      })
      .catch(err => {
        console.error(err);
        setCargando(false);
      })
    }, []);

    /*const productos = [
        { id: '1', nombre: 'Cable HDMI 4K 2m', precio: '$150 MXN', categoria: 'Accesorios' },
        { id: '2', nombre: 'Multicontacto USB', precio: '$350 MXN', categoria: 'Energía' },
        { id: '3', nombre: 'Adaptador USB-C', precio: '$220 MXN', categoria: 'Accesorios' },
        { id: '4', nombre: 'Teclado Gamer RGB', precio: '$890 MXN', categoria: 'Periféricos' },
    ]*/

    const productosFiltrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

  return(
    <div className="p-3 bg-white rounded-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <h3 className="fw-bold m-0 text-dark">Catálogo de Productos</h3>
          <small className="text-muted">Mostrando {productos.length} artículos disponibles</small>
        </div>

        <div className="mb-4">
            <input
                 type="text"
                 className="form-control"
                 placeholder="Buscar..."
                 value={busqueda}
                 onChange={(e) => setBusqueda(e.target.value)}
            />
        </div>
      </div>


      <div className="row g-3">
        {productosFiltrados.map((p) => (
          <Producto 
            key={p.id} 
            nombre={p.nombre} 
            precio={p.precio}
            categoria={p.categoria}
            image={p.imagen}
          />
        ))}
      </div>
    </div>
  )
}
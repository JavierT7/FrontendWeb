import { Producto } from "./Producto"

export function MainContent(){

    const productos = [
        {
            id: '1', nombre: 'HDMI', precio: '$55'
        },
        {
            id: '2', nombre: 'MULTI', precio: '$155'
        }
    ]

    return(
        <div style={{backgroundColor: 'red'}}>
            <span>HOLA!</span>
            {productos.map((p) => (
                <Producto key={p.id} nombre={p.nombre} precio={p.precio}/>
            ))
            }
        </div>
    )
}
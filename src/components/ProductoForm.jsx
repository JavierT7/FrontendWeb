import {useState} from 'react';
import {queryGraphQL} from '../services/api';

export function ProductoForm({setVista}){
    const [titulo, setTitulo] = useState('')
    const [body, setBody] = useState('');

    const QUERY_MUTACION = `
        mutation CrearPost($input: CreatePostInput!){
            createPost(input: $input){
                id,
                title,
                body
            }
        }
    `;

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const data = await queryGraphQL(QUERY_MUTACION, {
                input:{
                    title: titulo,
                    body: body
                }
            })

            alert('REGISTRO CREADO EXITOSAMENTE CON ID: ' + data.createPost.id)
        } catch (error){
            alert('Error: ' + error.message);
        }
    }

    return(
        <div>
            <form onSubmit={()=>handleSubmit()}>
                <h5>Nuevo Post</h5>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Titulo'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <input
                    type='text'
                    className='form-control'
                    placeholder='Cuerpo del producto'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button className='btn btn-secondary' type="submit">Guardar</button>
                <button className='btn btn-primary' type="button" onClick={()=>setVista('lista')}>REGRESAR A LISTA</button>
            </form>
        </div>
    )
}
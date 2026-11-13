//const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';
//const GRAPHQL_URL = 'https://graphqlzero.almansi.me/api';

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;


export async function queryGraphQL(query, variables = {}){
    //OBTENER TOKEN DEL NAVEGADOR SI ES QUE EXISTE
    const token = localStorage.getItem('token');

    //OBJETO DE CABECERAS BASICAS PARA EL HEADER AUTORIZATION
    const cabeceras = {
        'Content-Type':'application/json'
    }

    //INSERTAMOS TOKEN DE EXISTIR
    if(token){
        cabeceras['Authorization'] = 'Bearer ' + token;
    }
    //CONVERTIR OBJETO JAVASCRIPT A JSON
    const cuerpoPeticion = JSON.stringify({
        query: query,
        variables: variables
    })

    const respuesta = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: cabeceras,
        body: cuerpoPeticion
    })

    //CONVERTIR RESPUESTA DE SERVIDOR A JS
    const resultadoJson = await respuesta.json();

    //REVISAR ERRORES
    if(resultadoJson.errors){
        const mensajeError = resultadoJson.errors[0].message;
        throw new Error(mensajeError)
    }

    return resultadoJson.data;
}
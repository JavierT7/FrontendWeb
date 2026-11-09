import { useState } from 'react';

export function Login({onLoginSuccess}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = "eyaisjdoiasjdiosajd.oiasjdoasjd";

        localStorage.setItem('token', token);
        localStorage.setItem('email', email);

        onLoginSuccess(token);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Iniciar Sesión</h3>
                <label>Correo Eléctronico</label>
                <input 
                    type="email" 
                    className="form-control" 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                />

                <label>Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}
                />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
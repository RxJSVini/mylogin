import React, { useState, useContext} from "react";
import { Context } from "../../contexts/useAuth";
import { Navigate} from "react-router-dom";
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { Signin , user, userLogged}= useContext(Context);

    async function handleSubmit(e){
        e.preventDefault();
        return await Signin(email, password)
       
    }


    return(
        <> 
            {`${userLogged}`}
        
           <form onSubmit={handleSubmit}>
    
            <input 
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            
            />
            <input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            
            />
            <button disabled={email.length === 0}>Entrar</button>
           </form>
        </>
    )
}
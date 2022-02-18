import React, {Fragment, useContext} from "react";
import { Context } from "../../contexts/useAuth";

export default function Dash(){
    const { user , userLogged, SignOut} = useContext(Context);
    console.log(user, userLogged)

    return(
        <div>  
            <h1>Olá! Seja Bem vindo!</h1> {`${user}`} 

            <button onClick={() =>{
                SignOut();
                return window.location.href="/";
            }}>Sair</button>

        </div>
    )
}
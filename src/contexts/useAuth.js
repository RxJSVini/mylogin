import React, {  createContext, useState } from "react";
import firebaseCon from "../services/firebase";


export const Context = createContext({});

function AuthContext({ children }){
    const [userLogged, setuserLogged ] = useState(false);
    const [user, setUser ] = useState(null) ;


    async function Signin(email, password){
        await firebaseCon.auth().signInWithEmailAndPassword(email, password)
        .then((response ) =>{
            console.log('Usuário logado com sucesso!')
            setUser(response.user.email);
            setuserLogged(true)
        })
        .catch((error) =>{
            console.log('Problemas na autenticação!')
            console.log(error.message)
        })

    }



    return(
    
         
        <Context.Provider value={{ Signin , user, userLogged}}>
                {children}
        </Context.Provider>
    

    )
}

export  default AuthContext;
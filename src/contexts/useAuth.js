import React, {  createContext, useState } from "react";
// import firebaseCon from "../services/firebase";

import { useApi } from "./hooks/useApi";



export const Context = createContext({});

function AuthContext({ children }){
    const api = useApi();

    const [userLogged, setuserLogged ] = useState(false);
    const [user, setUser ] = useState(null) ;


    async function Signin(email, password){

        if(email, password){
            const data = await api.signin(email, password);
            if(data){
                setuserLogged(true);
                const { email } = data.user;
                setUser(email);
            }
        }

        localStorage.setItem("@my_token", `${Math.pow(55, 33)}${Date.now()}`);
    }


    async function SignOut(){
        try {
            await api.signout();
            return localStorage.removeItem("@my_token");

        } catch (error) {
            return error.message;
        }
    }



    return(
    
         
        <Context.Provider value={{ Signin , SignOut , user, userLogged}}>
                {children}
        </Context.Provider>
    

    )
}

export  default AuthContext;
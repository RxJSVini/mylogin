import { useContext } from "react";
import Login from "../pages/Login";
import { Context } from "./useAuth";

export const RequiredAuth = ({ children }) =>{
    const { userLogged} = useContext(Context);
    

    if(!userLogged){
        window.location.href="/";
        return <Login/>
    }

    return children;
}


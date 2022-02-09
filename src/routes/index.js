import React from "react";
import { Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Dash from "../pages/Dash";
export const Router = () =>{

    return(
        <>
 
            <Routes>
                
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/dash" element={<Dash/> }></Route> 
                
            </Routes>
     
        
    
        </>
    )
}
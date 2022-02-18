import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dash from "../pages/Dash";
import { RequiredAuth } from "../contexts/RequiredAuth";


export const Router = () =>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/dash" element={<RequiredAuth><Dash/></RequiredAuth>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                   
                </Routes>
            </BrowserRouter>
        
    
        </>
    )
}
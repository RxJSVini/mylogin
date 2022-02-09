import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dash from "../pages/Dash";




export const Router = () =>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route name="/dash" component={<Dash/>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        
    
        </>
    )
}
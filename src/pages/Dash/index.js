import React, {useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/useAuth";
// import { Navigate } from "react-router-dom";



export default function Dash(){
    const { user } = useContext(Context);
    

    return(
        <>
     

            {`${user}`}
      
      
   
        </>
    )
}
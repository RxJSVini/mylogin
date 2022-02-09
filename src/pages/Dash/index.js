import React, {useContext} from "react";
import { Context } from "../../contexts/useAuth";




export default function Dash(){
    const { user } = useContext(Context);
    

    return(
        <>
     

            {`${user}`}
      
      
   
        </>
    )
}
import React from "react";
import { Router } from "./routes";
import AuthContext from "./contexts/useAuth";



function App() {
  return (
    
           <AuthContext>
     
               <Router/>
       
           </AuthContext>
  );
}

export default App;

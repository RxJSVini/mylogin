import React from "react";
import { Router } from "./routes";
import AuthContext from "./contexts/useAuth";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    
           <AuthContext>
                <BrowserRouter>
                     <Router/>
                </BrowserRouter>
           </AuthContext>
  );
}

export default App;

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home"
import ListPlaces from "../pages/ListPlaces";
import ListSituation from "../pages/ListSituation";
import ListTypeUser from "../pages/ListTypeUser";
import ListUser from "../pages/ListUser";
import SingUp from "../pages/SingUp";
import Places from "../pages/Places";
import Situation from "../pages/Situation"; 
import TypeUser from "../pages/TypeUser";
const Routes = () => {
   return(
       <BrowserRouter>
           
           <Route component = { Home }  path="/" exact />
           <Route component = { ListPlaces }  path="/ListPlaces" />
           <Route component = { ListSituation }  path="/ListSituation" />
           <Route component = { ListTypeUser }  path="/ListTypeUser" />
           <Route component = { ListUser }  path="/ListUser" />
           <Route component = { SingUp }  path="/SingUp" />
           <Route component = { Places }  path="/Places" />
           <Route component = { Situation }  path="/Situation" />
           <Route component = { TypeUser }  path="/TypeUser" />
       </BrowserRouter>
   )
}

export default Routes;
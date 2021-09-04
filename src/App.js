import React from "react";
import {Switch, Route} from "react-router-dom";

import  Homepage from "./HomepageLayout/homepage";
import LandingPage from "./asset/layout page/landingpage/index";
import Footer from "./Component/Footer"



const App = () => {
  return (
    <Switch>
      <Route path= "/">
        <LandingPage heading= "GOD first"/>
        <Homepage/>
        <Footer/>
       
     
      </Route>
    </Switch>
   
  );
};

export default App;

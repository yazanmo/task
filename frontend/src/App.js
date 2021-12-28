import React, { useState} from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Login from "./components/login/login";
import Signup from "./components/signUp/signUp";
import Home from "./components/Home/index"
import Seller from "./components/Seller";
import Schedule from "./components/Schedule";
import SellerDetails from "./components/sellerDetails/index"
import AddDetails from "./components/AddDetails/AddDetails"

const App = () => {
  const [homePageSection, setHomePageSection] = useState("");
  
  return (
    <>
      <div className="App">
        <Navigation setHomePageSection={setHomePageSection} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                homePageSection={homePageSection}
                setHomePageSection={setHomePageSection}
              />
            )}
          />         
          <Route exact path="/login" render={() => <Login/>} />
          <Route exact path="/signup" render={() => <Signup/>} />
          <Route exact path="/seller" render={() => <Seller/>} />
          <Route exact path="/schedule" render={() => <Schedule/>} />
          <Route exact path="/sellerdetails/:id" render={() => <SellerDetails/>} />
          <Route exact path="/adddetails" render={() => <AddDetails/>} />



        </Switch>
      </div>
    </>
  );
};

export default App;

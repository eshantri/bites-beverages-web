import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Login from "./Components/Login/Login";
import AutoComplete from "./Components/Restaurants/AutoComplete";
import "./App.scss";

import Places from "./Components/Restaurants/Places";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login showSignIn="true" {...props} />}
          />
          <Route
            path="/signup"
            render={(props) => <Login showSignIn="false" {...props} />}
          />
          <Route path="/home" render={(props) =><> <Slider {...props} /> <AutoComplete items={Places}/></>} />
          <Redirect to="/home"></Redirect>
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
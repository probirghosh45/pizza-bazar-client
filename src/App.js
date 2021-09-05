import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Deals from "./components/Deals/Deals";
import Admin from "./components/Dashboard/Admin/Admin";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Dashboard/Order/Order";
export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart,setCart]=useState({})

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser,cart,setCart }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/deals">
            <Header />
            <Deals />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/:adminPanel">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

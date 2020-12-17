import React from 'react';
import "./App.css";
import Nav from "./component/navbar/Nav";
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";
import AboutUs from "./component/AboutUs/AboutUs";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
return (
  <>
  <Router>
  <Nav/>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/aboutus" component={AboutUs}/>
  </Switch>
    <Footer/>
    </Router>
  </>
  );
}
export default App;

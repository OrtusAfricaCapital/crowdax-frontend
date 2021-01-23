import React, { Component } from "react";
import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import HomeHeader from "./components/home/HomeHeader";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <MainNavbar />
          <Route exact path="/">
            <HomeHeader />
          </Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";
import HomeHeader from "./Components/Home/HomeHeader";
import MainNavbar from "./Components/Navbar/MainNavbar";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/Signup/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  state = {
    campaign: [
      {
        image: "",
        title: "The97fund",
        category: "Innovation",
        description:
          "(Short Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: "20000",
        target_amount: "1000000",
        duration: "30days",
        investors: "2000",
        majorInvestor: "future fund",
      },
      {
        image: "",
        title: "Ortus Africa",
        category: "Manfacturing",
        description:
          "(Short Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: "20000",
        target_amount: "1000000",
        duration: "30days",
        investors: "2000",
      },
    ],
  };

  render() {
    return (
      <Router>
        <div>
          <MainNavbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <HomeHeader />
              </React.Fragment>
            )}
          />

          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

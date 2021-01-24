import React, { Component } from "react";
import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import HomeHeader from "./components/home/HomeHeader";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    headlines: [
      { id: 1, heading: "Entire Investments", content: "UGX 700,000" },
      { id: 2, heading: "Live Campaigns", content: 27 },
      { id: 3, heading: "Secondary Campaigns", content: 13 },
      { id: 4, heading: "Entire deals", content: 350 },
    ],
    campaigns: [
      {
        id: 1,
        image: "https://picsum.photos/340/120",
        title: "The97fund",
        category: "Innovation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        amount_raised: 900000,
        amount_targeted: 6000000,
        start_date: "01/01/2021",
        end_date: "2/2/2021",
        investors: 11,
        major_investor: "future fund",
        location: "Massajja",
      },
      {
        id: 2,
        image: "https://picsum.photos/341/120",
        title: "Flip Africa",
        category: "Technology",
        description:
          "The Flip platform offers businesses the agility to hire talent for a specific work task without risk,",
        amount_raised: 4300000,
        amount_targeted: 9000000,
        start_date: "12/12/2020",
        end_date: "12/3/2021",
        investors: 13,
        major_investor: "Ortus Advocates",
        location: "Seguku",
      },

      {
        id: 3,
        image: "https://picsum.photos/342/121",
        title: "City Life",
        category: "Music",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 5000000,
        amount_targeted: 10000000,
        start_date: "13/1/2021",
        end_date: "2/23/2021",
        investors: 8,
        major_investor: "future fund",
        location: "Ndejje",
      },
    ],
  };
  render() {
    return (
      <Router>
        <div>
          <MainNavbar />
          <Route exact path="/">
            <HomeHeader
              headlines={this.state.headlines}
              campaigns={this.state.campaigns}
            />
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

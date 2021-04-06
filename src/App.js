import React, { Component } from "react";

import MainNavbar from "./components/navbar/MainNavbar";
import HomeHeader from "./components/home/HomeHeader";
import Footer from "./components/footer/Footer";
import SignUp from "./components/auth/signup/Signup";

import AllCampaigns from "./components/campaigns/AllCampaigns";
import InvestmentDashboard from "./components/dashboard/InvestmentDashboard";
import RaiseHome from "./components/raise/RaiseHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/signin/Login";
import axios from "axios";
import NotFoundPage from "./components/404/NotFoundPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      headlines: [
        { id: 1, heading: "Invested So Far", content: "$159,000" },
        { id: 2, heading: "Available Businesses", content: 127 },
        { id: 3, heading: "Done Deals", content: 230 },
        { id: 4, heading: "Available Investors", content: 450 },
      ],
      campaigns: [
        {
          id: 1,
          image: "https://picsum.photos/340/120",
          title: "FAMUNERA",
          category: "AgriTech",
          short_description:
            "Our company is an Agritech service provider Using a mobile app on Android USSD technology Consumers and businesses can make purchases for agricultural inputs to small holder farmers and pay instantly using Mobile Money",
          amount_raised: 900,
          amount_targeted: 6000,
          start_date: "01/01/2021",
          end_date: "2/2/2021",
          investors: 11,
          major_investor: "Cynopus",
          location: "Massajja",
        },
        {
          id: 2,
          image: "https://picsum.photos/341/120",
          title: "BOYI & BOYI LIMITED",
          category: "Agribusines",
          short_description:
            "This is a Social Enterprise that aims at promoting high quality agricultural products and services aimed at eradicating poverty, food crisis, farmer exploitation, and adaptation to technology in the Agricultural Value Chain",
          amount_raised: 13000,
          amount_targeted: 50000,
          start_date: "12/12/2020",
          end_date: "12/5/2021",
          investors: 306,
          major_investor: "Ortus Africa Capital",
          location: "Seguku",
        },

        {
          id: 3,
          image: "https://picsum.photos/342/121",
          title: "Hydroponics Farms Uganda",
          category: "Agriculture",
          short_description:
            "This is a smart urban farming social enterprise that primarily designs, manufactures and distributes Hydroponic farms We empower mainly vulnerable women farmers to achieve predictable and highly nutritious yields for vegetables and produce their own animal feed a        limited cost of input",
          amount_raised: 5000,
          amount_targeted: 10000,
          start_date: "13/1/2021",
          end_date: "2/23/2021",
          investors: 72,
          major_investor: "UCC",
          location: "Ndejje",
        },
        {
          id: 4,
          image: "https://picsum.photos/342/119",
          title: "Prointerns",
          category: "Agriculture",
          short_description:
            "E Recruitment platform that connects students and graduates to internship and placement opportunities with leading organizations and impactful startups Through",
          amount_raised: 24000,
          amount_targeted: 35000,
          start_date: "13/1/2021",
          end_date: "3/1/2021",
          investors: 10,
          major_investor: "Leco Bakery",
          location: "Ndejje",
        },
        {
          id: 5,
          image: "https://picsum.photos/342/121",
          title: "River Poultry",
          category: "AgriBusiness",
          short_description:
            "River Poultry is an agribusiness that was founded on the belief that the chicken that we eat should be healthy and raised responsibly by farmers We leverage technology and long term relationships with smallholder farmers to produce affordable chickens, sustainably",
          amount_raised: 240,
          amount_targeted: 30000,
          start_date: "25/11/2021",
          end_date: "3/6/2021",
          investors: 122,
          major_investor: "Ortus Advocates",
          location: "Kawempe",
        },
        {
          id: 6,
          image: "https://picsum.photos/341/121",
          title: "ADYERI CREATIONS",
          category: "Creative Arts",
          short_description:
            "An online retailer that currently focuses exclusively on the marketing and distribution of custom designed Jewelry, footwear, clothes, crafts, sculptures and gift items",
          amount_raised: 3000,
          amount_targeted: 34000,
          start_date: "13/1/2021",
          end_date: "3/7/2021",
          investors: 12,
          major_investor: "Tripixio",
          location: "Mutundwe",
        },

        {
          id: 7,
          image: "https://picsum.photos/341/121",
          title: "Bringo Fresh",
          category: "Agribusiness / E-commerce",
          short_description:
            "Bringo Fresh is a logistics company that helps food buyers and farmers to reduce food waste and enhance nutrition in Uganda",
          amount_raised: 3300,
          amount_targeted: 44000,
          start_date: "13/3/2021",
          end_date: "3/7/2021",
          investors: 112,
          major_investor: "Tripixio",
          location: "Massajja",
        },

        {
          id: 8,
          image: "https://picsum.photos/341/121",
          title: "ONLINE BUTCHERY",
          category: "E-commerce",
          description:
            "The Online Butchery is an online meat platform that is dedicated to delivering a variety of fresh meat and meat products to its clients",
          amount_raised: 13000,
          amount_targeted: 64000,
          start_date: "13/3/2021",
          end_date: "3/8/2021",
          investors: 102,
          major_investor: "Tripixio",
          location: "Remote",
        },
      ],
    };
    //binds the functions
    //this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  //checks if the user is logged in
  checkLoginStatus() {
    axios
      .get("https://crowdaxconnect.herokuapp.com/api/v1/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        // console.log("logged in?", response.data.user);
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
          // console.log("Test", window.location.pathname);
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }
  //handles log in status
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      // helps to link pages
      <Router>
        {" "}
        <div style={AppComponentCSS}>
          {/* Mainnavbar is reposible for showing the navbar of the app */}

          <MainNavbar
            loggedInStatus={this.state.loggedInStatus}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomeHeader
                  {...props}
                  headlines={this.state.headlines}
                  campaigns={this.state.campaigns}
                />
              )}
            />

            <Route path="/raise" component={RaiseHome} />

            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />

            <Route
              path="/signup"
              render={(props) => (
                <SignUp
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

            <Route
              path="/companies"
              render={(props) => (
                <AllCampaigns
                  {...props}
                  campaigns={this.state.campaigns}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route path="/company" component={InvestmentDashboard} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
const AppComponentCSS = {
  backgroundColor: "#eeeeee",
};

export default App;

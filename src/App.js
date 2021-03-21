import React, { Component } from "react";
import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import HomeHeader from "./components/home/HomeHeader";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCampaigns from "./components/campaigns/AllCampaigns";
import Register from "./components/signup/Register";
import InvestmentDashboard from "./components/dashboard/InvestmentDashboard";

class App extends Component {
  state = {
    headlines: [
      { id: 1, heading: "Total Investments", content: "UGX 700,000" },
      { id: 2, heading: "Live Investments", content: 27 },
      { id: 3, heading: "Secondary Investments", content: 13 },
      { id: 4, heading: "Total Investors", content: 350 },
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
        major_investor: "Cynopus",
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
        investors: 6,
        major_investor: "Ortus Africa Capital",
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
        investors: 72,
        major_investor: "UCC",
        location: "Ndejje",
      },
      {
        id: 4,
        image: "https://picsum.photos/342/119",
        title: "Famunera",
        category: "Agriculture",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 2400000,
        amount_targeted: 35000000,
        start_date: "13/1/2021",
        end_date: "3/1/2021",
        investors: 10,
        major_investor: "Leco Bakery",
        location: "Ndejje",
      },
      {
        id: 5,
        image: "https://picsum.photos/342/121",
        title: "Minute 5",
        category: "Business",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 2400000,
        amount_targeted: 300000,
        start_date: "25/1/2021",
        end_date: "3/1/2021",
        investors: 122,
        major_investor: "Ortus Advocates",
        location: "Kawempe",
      },
      {
        id: 6,
        image: "https://picsum.photos/341/121",
        title: "Xente",
        category: "Innovation",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 31000000,
        amount_targeted: 35000000,
        start_date: "13/1/2021",
        end_date: "3/1/2021",
        investors: 12,
        major_investor: "Tripixio",
        location: "Mutundwe",
      },
    ],
    investments:{
      companyName: "Wanda",
      description: "wanda weira",
      amounts: 10000000,
    }
  };
  render() {
    return (
      // helps to link pages
      <Router>
        {" "}
        <div>
          {/* Mainnavbar is reposible for showing the navbar of the app */}
          <MainNavbar />

          <Switch>
            <Route exact path="/">
              <HomeHeader
                headlines={this.state.headlines}
                campaigns={this.state.campaigns}
              />
            </Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={Register} />
            <Route path="/allinvestments" component={AllCampaigns} />
            <Route path="/investment" component={InvestmentDashboard} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

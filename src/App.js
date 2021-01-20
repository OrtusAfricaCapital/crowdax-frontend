import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import HomeHeader from "./components/home/HomeHeader";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <MainNavbar />
      <HomeHeader />
      <Footer />
    </div>
  );
}

export default App;

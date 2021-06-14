import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Webinar from "./pages/Webinar";
import DownloadApp from "./pages/DownloadApp";
import Aboutus from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/webinar" component={Webinar} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/downloadapp" component={DownloadApp} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
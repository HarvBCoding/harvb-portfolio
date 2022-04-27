import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Resume from "../src/components/Resume/Resume";

import Nav from "../src/components/Nav/Nav";
import Footer from "../src/components/Footer/Footer";

import Home from "../src/components/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/harvb-portfolio/" component={Home} />
            <Route exact path="/harvb-portfolio/about" component={About} />
            <Route exact path="/harvb-portfolio/portfolio" component={Portfolio} />
            <Route exact path="/harvb-portfolio/resume" component={Resume} />
            <Route exact path="/harvb-portfolio/contactme" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

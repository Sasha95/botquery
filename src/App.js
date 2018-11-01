import React, { Component, Fragment } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Route } from "react-router-dom";
import { HomeWork } from "./components/HomeWork";
import { StbleInter } from "./components/StbleInter.js";
import { RussianLevel } from "./components/RussianLevel";
import { Period } from "./components/Period";
import { TimeWork } from "./components/TimeWork";
import { Experience } from "./components/Experience/Experience";
import { OurOffer } from "./components/OurOffer";
import { Congartiluation } from "./components/Congartiluation";
import { Failure } from "./components/Failure";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomeWork} />
        <Route exact path="/StableInternet" component={StbleInter} />
        <Route exact path="/RussianLevel" component={RussianLevel} />
        <Route exact path="/Period" component={Period} />
        <Route exact path="/TimeWork" component={TimeWork} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/OurOffer" component={OurOffer} />
        <Route exact path="/Congartiluation" component={Congartiluation} />
        <Route exact path="/Failure" component={Failure} />
      </Fragment>
    );
  }
}

export default App;

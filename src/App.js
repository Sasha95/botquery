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
        <Route component={HomeWork} />
        <Route exact path="/botquery/" component={HomeWork} />
        <Route path="/botquery/StableInternet" component={StbleInter} />
        <Route path="/botquery/RussianLevel" component={RussianLevel} />
        <Route path="/botquery/Period" component={Period} />
        <Route path="/botquery/TimeWork" component={TimeWork} />
        <Route path="/botquery/Experience" component={Experience} />
        <Route path="/botquery/OurOffer" component={OurOffer} />
        <Route path="/botquery/Congartiluation" component={Congartiluation} />
        <Route path="/botquery/Failure" component={Failure} />
      </Fragment>
    );
  }
}

export default App;

import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./screens/movies/Header";
import Movies from "./screens/movies/movies";
import Series from "./series/Series";
const Controller = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/" render={() => <Movies />} />
          <Route path="/series" render={() => <Series />} />
        </Switch>
      </Router>
    </Fragment>
  );
};
export default Controller;

import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Movie2 from "./Movie2";



function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/movie-2'> 
          <Movie2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

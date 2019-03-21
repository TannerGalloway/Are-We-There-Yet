import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Trip from "./pages/Trip/Trip";
import NoMatch from "./pages/NoMatch/Nomatch";
import Nav from "./components/Nav/index"
import Gas from "./pages/Gas/gas"
import Jumbo from "./components/Jumbo/index"

function App() {
    return (
        <Router>
            <Jumbo />
            <Nav />
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/gas" component={Gas} />
                    <Route exact path="/trip" component={Trip} />
                    <Route component={NoMatch} />
                </Switch>
            </div >
        </Router >
    );
}

export default App;
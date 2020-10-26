import Main from "../routes/Main";
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch, browserHistory} from "react-router-dom";
import WowRotations from "../routes/WowRotations";

let ReactGA = require('react-ga');
export default class AppRoot extends React.Component {

    logPageView = () => {
        ReactGA.set({page: window.location.pathname + window.location.search});
        ReactGA.pageview(window.location.pathname + window.location.search);
    };

    render() {
        return <Router history={browserHistory} onUpdate={this.logPageView}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={WowRotations}/>
                    <Route exact path="/wow" component={Main}/>
                    <Route render={() => <h1>404: page not found</h1>}/>
                    {/*<Route path="/about" component={About}/>*/}
                </Switch>
            </Suspense>
        </Router>
    }
}
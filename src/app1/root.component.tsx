import * as React from 'react';
import {Link, Redirect, Route, Router, Switch} from 'react-router-dom';
import * as HistoryCreator from 'history';

export const customHistory = HistoryCreator.createBrowserHistory();

export default class Root extends React.Component<any,any> {
  render() {
    const message: string = "This was rendered by app 1 which was written in React";

    return (
        <Router history={customHistory}>
            <div style={{marginTop: '100px'}}>
                {message}
                <ul>
                    <li><Link to={`/app1/react-route`}>React sub route</Link></li>
                    <li><Link to={`/app2`} >Go app2</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path={`/app1/react-route`} render={() => <div>React sub route</div>} />
                    <Redirect to='/app1' />
                </Switch>
            </div>
        </Router>
    );
  }
}

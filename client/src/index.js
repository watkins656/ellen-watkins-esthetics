import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import ManageRoutine from './Pages/manageRoutine';
import NoMatch from './Pages/404';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


class Root extends React.Component {
    state = {
    }
  
    render() {
      return (
        <BrowserRouter basename={'/'}>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              render={props => (
                <App  />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/manageRoutine`}
              render={props => (
                <ManageRoutine  />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
  
  ReactDOM.render(<Root />, document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 

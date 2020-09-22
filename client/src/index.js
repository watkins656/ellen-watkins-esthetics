import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import AboutEllen from './Pages/aboutEllen';
import BookAppointment from './Pages/bookAppointment';
import SkinServices from './Pages/services';
import PageTemplate from './Pages/page-template';
import NoMatch from './Pages/404';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
if (typeof window !== 'undefined') {
  window.React = React;
}

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
              path={`${process.env.PUBLIC_URL}/book-appointment`}
              render={props => (
                <BookAppointment  />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/page-template`}
              render={props => (
                <PageTemplate />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/services`}
              render={props => (
                <SkinServices  />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              render={props => (
                <Contact  />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/faq`}
              render={props => (
                <FAQ  />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/about-ellen`}
              render={props => (
                <AboutEllen  />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/SkinRoutines`}
              render={props => (
                <SkinServices  />
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

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './components/home/Home.jsx';
import Loading from './components/Loading.jsx';
import PrimaryNav from './components/PrimaryNav.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Profile from './components/profile/Profile.jsx';

import { useAuth0 } from './react-auth0-spa';

import history from './utils/history';
import initFontAwesome from './utils/initFontAwesome';

import './App.css';

initFontAwesome();

export default () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading id="app-loading" />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <PrimaryNav />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};
